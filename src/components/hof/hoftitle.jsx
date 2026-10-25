function HofTitle() {
  return (
    <div id="hof-title">
      <img
        src="/images/carolinapanthers.png"
        alt="Carolina Panthers"
      />

      <div>
        <h2>
          HALL OF FAME
          <span> MEMBERS</span>
        </h2>

        <p>CAROLINA PANTHERS</p>
      </div>

      <button
        type="button"
        onClick={() =>
          document
            .getElementById("hof-grid")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        VIEW ALL →
      </button>
    </div>
  );
}

export default HofTitle;
