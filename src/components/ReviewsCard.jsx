export const ReviewsCard = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      {reviews &&
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>Review: {content}</p>
            </li>
          );
        })}
    </>
  );
};
