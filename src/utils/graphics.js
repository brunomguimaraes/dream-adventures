import React from 'react';

const cssPxCoercion = (value) => {
  let parsed = +value;
  return isNaN(parsed) ? value : `${value}px`;
};

export const SvgUse = ({ id, category, width, height, color, ...moreStyles }) => {
  let styles = {};

  if (!!width) styles.width = cssPxCoercion(width);
  if (!!height) styles.height = cssPxCoercion(height);
  if (!!color) styles.color = color;

  return (
    <svg
      viewBox={width && height ? `0 0 ${width} ${height}` : null}
      style={{
        ...moreStyles,
        ...styles,
      }}
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};
