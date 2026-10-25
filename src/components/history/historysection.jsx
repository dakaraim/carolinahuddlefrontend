function HistorySection({ title, paragraphs, image, imageAlt }) {
  return (
    <section className="history-section">
      <h2>{title}</h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <img
        src={image}
        alt={imageAlt}
        className="history-image"
      />
    </section>
  );
}

export default HistorySection;
