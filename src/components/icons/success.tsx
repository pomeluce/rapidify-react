const success: React.FC<{ className?: string }> = props => {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256">
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: 'normal' }}
      >
        <g transform="scale(5.33333,5.33333)">
          <path d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z" fill="#18a058"></path>
          <path d="M34.602,14.602l-13.602,13.597l-5.602,-5.598l-2.797,2.797l8.399,8.403l16.398,-16.402z" fill="#fefefe"></path>
        </g>
      </g>
    </svg>
  );
};

export default success;
