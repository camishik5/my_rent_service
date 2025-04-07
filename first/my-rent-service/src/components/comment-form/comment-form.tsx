import { useState } from 'react';

function CommentForm(): React.JSX.Element {
  // Инициализация состояния формы
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  // Обработчик изменения текста комментария
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  // Обработчик изменения рейтинга
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  // Обработчик отправки формы
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ comment, rating });
    // Здесь можно добавить отправку данных на сервер или другую логику
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <textarea
        className="form__textarea"
        id="review"
        name="review"
        placeholder="Write your comment..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>

      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star}>
            <input
              type="radio"
              id={`${star}-stars`}
              name="rating"
              value={star}
              checked={rating === star}
              onChange={handleRatingChange}
            />
            <label htmlFor={`${star}-stars`}>{star} Stars</label>
          </div>
        ))}
      </div>
      <button type="submit" className="form__submit button">Submit</button>
    </form>
  );
}

export default CommentForm;
