import PropTypes from 'prop-types';
import { ReviewsCardBox, ReviewsCardItem, Text } from './ReviewsCard.styled';

const ReviewsCard = ({ reviews }) => {
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

export default ReviewsCard;

ReviewsCard.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
