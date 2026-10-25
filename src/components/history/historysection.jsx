
function HistorySection({ title, paragraphs, image, imageAlt }) {
  const imagePath = `${process.env.PUBLIC_URL}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <section className="history-section">
      <h2>{title}</h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <img
        src={imagePath}
        alt={imageAlt || title}
        className="history-image"
      />
    </section>
  );
}

export default HistorySection;
