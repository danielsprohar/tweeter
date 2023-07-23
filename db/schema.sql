create table profiles (
  id uuid not null references auth.users on delete cascade,
  username varchar(256) unique,
  first_name text,
  last_name text,
  primary key(id),
  constraint username_length check (char_length(username) >= 3)
);

create table follows (
  following_user_id uuid not null,
  followed_user_id uuid not null,
  created_at timestamp with time zone not null default now(),
  PRIMARY KEY(following_user_id, followed_user_id),
  FOREIGN KEY (following_user_id) REFERENCES profiles(id)
    ON DELETE CASCADE,
    FOREIGN KEY (followed_user_id) REFERENCES profiles(id)
    ON DELETE CASCADE
);

create table tweets (
  id bigint generated always as identity primary key,
  body varchar(280) not null,
  retweets_count bigint default 0,
  likes_count bigint default 0,
  views_count bigint default 0,
  created_at timestamp with time zone not null default now(),
  author_id uuid not null references auth.users on delete cascade,
  unique(author_id)
);

create table hashtags (
  id bigint generated always as identity primary key,
  name varchar(64) not null,
  created_at timestamp with time zone not null default now()
);

create table post_hashtags (
  post_id bigint not null,
  hashtag_id bigint not null,
  created_at timestamp with time zone not null default now(),
  PRIMARY KEY (post_id, hashtag_id),
  FOREIGN KEY (post_id) REFERENCES tweets(id) 
    ON DELETE CASCADE,
  FOREIGN KEY (hashtag_id) REFERENCES hashtags(id) 
    ON DELETE CASCADE
);

create table
  replies (
    id bigint generated always as identity primary key,
    body varchar(280) not null,
    author_id uuid not null references auth.users on delete cascade,
    post_id bigint not null,
    reply_id bigint not null,
    created_at timestamp with time zone not null default now(),
    unique(author_id),
    FOREIGN KEY (reply_id) REFERENCES replies (id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES tweets (id) ON DELETE CASCADE
  );


create table likes (
  user_id uuid not null references auth.users on delete cascade,
  post_id bigint not null,
  created_at timestamp with time zone not null default now(),
  PRIMARY KEY(user_id, post_id),
  FOREIGN KEY (post_id) REFERENCES tweets(id) 
    ON DELETE CASCADE
);

create table bookmarks (
  user_id uuid not null references auth.users on delete cascade,
  post_id bigint not null,
  created_at timestamp with time zone not null default now(),
  PRIMARY KEY (user_id, post_id),
  FOREIGN KEY (post_id) REFERENCES tweets(id) 
    ON DELETE CASCADE
);

-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profiles enable row level security;
alter table follows enable row level security;
alter table tweets enable row level security;
alter table likes enable row level security;
alter table replies enable row level security;
alter table bookmarks enable row level security;
alter table post_hashtags enable row level security;


-- ==================================================================
-- Create policies
-- ==================================================================
-- Only authenticated users can do CRUD operations

-- users
create policy "Logged-in users can see other users"
  on profiles for select 
  using (auth.role() = 'authenticated');

create policy "Users can create a profile."
  on profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile."
  on profiles for update 
  using (auth.uid() = id);

  
-- follows
create policy "Logged-in users can see who follows other users"
  on follows for select
  using (auth.role() = 'authenticated');

create policy "Users can follow other users"
  on follows for insert 
  with check (auth.uid() = following_user_id);

create policy "Users can unfollow other users"
  on follows for delete 
  using (auth.uid() = following_user_id);

  
-- tweets
create policy "Logged-in users can see all tweets"
  on tweets  for select 
  using (auth.role() = 'authenticated');

create policy "Users can create a post"
  on tweets  for insert 
  with check (auth.uid() = author_id);

create policy "Users can delete their own post"
  on tweets  for delete 
  using (auth.uid() = author_id);

  
-- likes
create policy "Logged-in users can see likes"
  on likes  for select 
  using (auth.role() = 'authenticated');

create policy "Users can like a post"
  on likes  for insert 
  with check (auth.uid() = user_id);

create policy "Users can unlike a post"
  on likes  for delete 
  using (auth.uid() = user_id);
  
-- replies
create policy "Logged-in users can see replies"
  on replies for select 
  using (auth.role() = 'authenticated');

create policy "Users can reply to a post"
  on replies for insert 
  with check (auth.uid() = author_id);

create policy "Users can delete their reply to a post"
  on replies for delete 
  using (auth.uid() = author_id);
  
-- bookmarks
create policy "Logged-in users can see bookmarks"
  on bookmarks for select 
  using (auth.role() = 'authenticated');

create policy "Users bookmark a post"
  on bookmarks for insert 
  with check (auth.uid() = user_id);

create policy "Users unbookmark a post"
  on bookmarks for delete 
  using (auth.uid() = user_id);

-- post_hashtags
create policy "Logged-in users can tagged tweets"
  on post_hashtags for select 
  using (auth.role() = 'authenticated');

create policy "Users can add hash tags to their post"
  on post_hashtags for insert 
  with check (auth.role() = 'authenticated');

create policy "Users can delete hash tags from their post"
  on post_hashtags for delete 
  using (auth.role() = 'authenticated');


-- ==================================================================
-- Functions
-- ==================================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (NEW.id, NEW.raw_user_meta_data->>'username');
  return NEW;
end;
$$;

-- ==================================================================
-- Triggers
-- ==================================================================
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
