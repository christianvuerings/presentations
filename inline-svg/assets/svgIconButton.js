module.exports = `import React from 'react';
import i18n from 'app/common/lib/i18n';
import { IconButton } from 'gestalt';

export default (props) => {
  const {
    handleLikeButtonClick,
    pinLiked,
  } = props;
  return (
    <IconButton
      icon="heart"
      iconColor={pinLiked ? 'red' : 'gray'}
      label={pinLiked ? i18n._('Unlike') : i18n._('Like')}
      onClick={handleLikeButtonClick}
    />
  );
};`;
