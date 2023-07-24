import peopleBody from '../../../../json/people-body-00.json'
import peopleBody1 from '../../../../json/people-body-01.json'
import peopleBody2 from '../../../../json/people-body-02.json'
import peopleBody3 from '../../../../json/people-body-03.json'
import peopleBody4 from '../../../../json/people-body-04.json'
import peopleBody5 from '../../../../json/people-body-05.json'
import peopleBody6 from '../../../../json/people-body-06.json'
import peopleBody7 from '../../../../json/people-body-07.json'
import peopleBody8 from '../../../../json/people-body-08.json'
import peopleBody9 from '../../../../json/people-body-09.json'
import peopleBody10 from '../../../../json/people-body-10.json'
import peopleBody11 from '../../../../json/people-body-11.json'
import peopleBody12 from '../../../../json/people-body-12.json'
import peopleBody13 from '../../../../json/people-body-13.json'
import smileys from '../../../../json/smileys-emotion-00.json'

export default function SmileysAndPeopleEmojis() {
  return (
    <div className="emojis-container">
      {smileys.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody1.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody2.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody3.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody4.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody5.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody6.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody7.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody8.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody9.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody10.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody11.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody12.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
      {peopleBody13.emojis.map((item) => (
        <div
          role="option"
          key={item.emoji.annotation}
          className="emoji-btn"
          title={`${item.emoji.annotation}`}
          aria-label={`${item.emoji.annotation}`}
          aria-selected="false"
        >
          {item.emoji.emoji}
        </div>
      ))}
    </div>
  )
}
