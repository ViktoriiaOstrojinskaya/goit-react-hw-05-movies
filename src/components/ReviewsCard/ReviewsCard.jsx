import { ReviewsCardBox, ReviewsCardItem, Text } from './ReviewsCard.styled';

export const ReviewsCard = ({ reviews }) => {
  return (
    <ReviewsCardBox>
      {reviews &&
        reviews.map(({ id, author, content }) => {
          return (
            <ReviewsCardItem key={id}>
              <Text>
                <b>Author:</b> {author}
              </Text>
              <p>
                <b>Review:</b> {content}
              </p>
            </ReviewsCardItem>
          );
        })}
    </ReviewsCardBox>
  );
};
