<div className="features">
  <div
    className="feature"
    style={{ display: "flex", flexDirection: "row" }}
  >
    {bodyItems.map(({ title, icon, text }) => (
      <div
        key={title}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
          padding: "10px",
        }}
      >
        <FontAwesomeIcon icon={icon} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    ))}
  </div>
</div>