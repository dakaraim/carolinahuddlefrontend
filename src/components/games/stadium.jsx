function Stadium() {
  return (
    <section id="stadium">
      <div id="stadium-heading">
        <h2>Bank of America Stadium</h2>
        <p>Home of the Carolina Panthers</p>
      </div>

      <div id="stadium-map">
        <iframe
          src="https://www.google.com/maps?q=Bank+of+America+Stadium+Charlotte+NC&output=embed"
          title="Bank of America Stadium Map"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Stadium;
