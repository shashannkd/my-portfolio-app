const TechStack = () => {
  return (
    <section className="techstack--section" id="techstack">
      <div className="techstack--header">
        <h1 className="techstack--title">My Techstack</h1>
      </div>
      <div className="technologies--list">
        <div className="technologies--slide">
          <img src="./img/icons8-java.svg" alt="icon" title="Java" />
          <img
            src="./img/icons8-spring-boot.svg"
            alt="icon"
            title="Springboot"
          />
          <img src="./img/reactjs-icon.svg" alt="icon" title="React JS" />
          <img src="./img/mysql-icon.svg" alt="icon" title="MySQL" />
          <img src="./img/python-icon.svg" alt="icon" title="Python 3" />
          <img src="./img/mongodb-icon.svg" alt="icon" title="Mongo DB" />
          <img src="./img/linux-svgrepo-com.svg" alt="icon" title="Linux" />
          <img src="./img/git-scm-icon.svg" alt="icon" title="Git" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
