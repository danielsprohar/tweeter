export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          created_at: string
          post_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          post_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          post_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmarks_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      follows: {
        Row: {
          created_at: string
          followed_user_id: string
          following_user_id: string
        }
        Insert: {
          created_at?: string
          followed_user_id: string
          following_user_id: string
        }
        Update: {
          created_at?: string
          followed_user_id?: string
          following_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "follows_followed_user_id_fkey"
            columns: ["followed_user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follows_following_user_id_fkey"
            columns: ["following_user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      hashtags: {
        Row: {
          created_at: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          id?: never
          name: string
        }
        Update: {
          created_at?: string
          id?: never
          name?: string
        }
        Relationships: []
      }
      likes: {
        Row: {
          created_at: string
          post_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          post_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          post_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      post_hashtags: {
        Row: {
          created_at: string
          hashtag_id: number
          post_id: number
        }
        Insert: {
          created_at?: string
          hashtag_id: number
          post_id: number
        }
        Update: {
          created_at?: string
          hashtag_id?: number
          post_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "post_hashtags_hashtag_id_fkey"
            columns: ["hashtag_id"]
            referencedRelation: "hashtags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "post_hashtags_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          first_name: string | null
          id: string
          last_name: string | null
          username: string | null
        }
        Insert: {
          first_name?: string | null
          id: string
          last_name?: string | null
          username?: string | null
        }
        Update: {
          first_name?: string | null
          id?: string
          last_name?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      replies: {
        Row: {
          author_id: string
          body: string
          created_at: string
          id: number
          post_id: number
          reply_id: number
        }
        Insert: {
          author_id: string
          body: string
          created_at?: string
          id?: never
          post_id: number
          reply_id: number
        }
        Update: {
          author_id?: string
          body?: string
          created_at?: string
          id?: never
          post_id?: number
          reply_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "replies_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "tweets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_reply_id_fkey"
            columns: ["reply_id"]
            referencedRelation: "replies"
            referencedColumns: ["id"]
          }
        ]
      }
      tweets: {
        Row: {
          author_id: string
          body: string
          created_at: string
          id: number
          likes_count: number | null
          retweets_count: number | null
          views_count: number | null
        }
        Insert: {
          author_id: string
          body: string
          created_at?: string
          id?: never
          likes_count?: number | null
          retweets_count?: number | null
          views_count?: number | null
        }
        Update: {
          author_id?: string
          body?: string
          created_at?: string
          id?: never
          likes_count?: number | null
          retweets_count?: number | null
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tweets_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
