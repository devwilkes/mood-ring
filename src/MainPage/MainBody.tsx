import {
    faRedo,
    faBook,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  const bodyItems = [
    {
      title: "Restart Session",
      icon: faRedo,
      click: () => {
        window.location.reload();
      }
    },
    {
        title: "Color Catalog",
        icon: faBook,
        click: () => {
            window.location.href = "/CatalogPage";
      }
    },
  ];
  
  // Define a functional component named Main
  const Main: React.FC = () => {
    // Return a JSX element that renders the main content of the website
    return (
      <div className="main-bg-default">
        <div className="hero">
          <h1 className="text-fade-in">Welcome.</h1>
          <p className="text-fade-in">
            Before we begin finding your mood color, would you mind telling me your name?
          </p>
          <form id = "welcome_splash_form">
            <input type="text" placeholder="Please enter your name." required />
          </form>
        </div>
  
        <div className="features">
          <div
            className="feature"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {bodyItems.map(({ title, icon }) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  <div className="features">
  <div
    className="feature"
    style={{ display: "flex", flexDirection: "row" }}
  >
    {bodyItems.map(({title, icon, click}) => (
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
      </div>
    ))}
  </div>
</div>
  
  export default Main;