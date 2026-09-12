const ServiceIcon = ({ type }) => {
  const glyphs = {
    manicure: (
      <g>
        <path d="M10.5 3.5h3" />
        <path d="M11 3.5v2.6" />
        <path d="M13 3.5v2.6" />
        <path d="M10.2 11.5l-2-1.9c-.9-.9-.8-2.5.2-3.3.9-.8 2.3-.7 3.1.2l.5.6.9-1.2c.6-.8 1.7-1 2.5-.4.8.6 1 1.8.4 2.6l-1.6 2.1" />
        <path d="M9.5 14.8c-1.6 1.4-3.4 2-5.5 1.7" />
        <path d="M10.5 11.5l-.7 3.1" />
        <path d="M12.8 12.4l1.6 3.9-1.4 2.2" />
      </g>
    ),
    pedicure: (
      <g>
        <path d="M12 3.5c2.1 0 3.8 1.7 3.8 3.8" />
        <path d="M14.2 5.6c1.2.9 1.9 2.2 1.9 3.7" />
        <path d="M16 5.7c1.4.7 2.3 1.9 2.3 3.3" />
        <path d="M8 9.5c0-1.7 1.4-3 3-3s3 1.3 3 3c0 1.1-.6 2-1.5 2.5-.9.5-1.3 1.3-1.3 2.3" />
        <path d="M9.5 8.6c-1.8.6-3.2 2-3.9 3.8-.5 1.3-.9 2.7-.6 4.1" />
        <path d="M6.5 8.3c-1.5 1-2.7 2.7-3.2 4.5" />
        <path d="M15 17.5c0 1.2-.9 2.2-2 2.2H9c-1.1 0-2-1-2-2.2v-1.8h8v1.8Z" />
      </g>
    ),
    extensions: (
      <g>
        <path d="M12 3c2.8 0 5.2 2.4 5.2 6.3 0 4.2-2.4 8.2-5.2 8.2S6.8 13.5 6.8 9.3C6.8 5.4 9.2 3 12 3Z" />
        <path d="M9.6 7.5h4.8" />
        <path d="M12.8 3.4l.7-.9" />
      </g>
    ),
    nailart: (
      <g>
        <path d="M13.8 3.3c1.8-1.8 4.6-1.8 6.4 0s1.8 4.6 0 6.4L9.3 20.6l-4.6 1.1 1.1-4.6Z" />
        <path d="M6.7 17.3l4.4 4.3" />
        <path d="M11.5 15.5l-1.6-1.2" />
      </g>
    ),
    gel: (
      <g>
        <path d="M12 3.5c2.5 2.9 4.2 5.1 4.2 7.7a4.2 4.2 0 0 1-8.4 0c0-2.6 1.7-4.8 4.2-7.7Z" />
        <path d="M10 12.2c.5-.8 1.4-1.2 2.4-1.2" />
      </g>
    ),
    other: (
      <g>
        <path d="M12 4.5l1.7 4.3L18 10.5l-4.3 1.7L12 16.5l-1.7-4.3L6 10.5l4.3-1.7Z" />
        <path d="M18.5 15.2l.7 1.8 1.8-.1 1 .6-1.3 1.3.4 1.8-1.7-.6-1.5 1-.6-1.7h-1.8l1.1-1.4-.4-1.8 1.5.6Z" />
      </g>
    ),
  }
  return (
    <svg
      className="service-icon-svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {glyphs[type]}
    </svg>
  )
}

export default ServiceIcon