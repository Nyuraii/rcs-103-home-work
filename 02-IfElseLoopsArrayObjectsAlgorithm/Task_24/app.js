const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "Redux",
    "Node",
    "JS",
    "MongDB",
  ];
  
  function filterwebTechs(techs) {
    const longTechs = [];
    
    for (let i = 0; i < techs.length; i++) {
      if (techs[i].length > 4) {
        longTechs.push(techs[i]);
      }
    }
    
    return longTechs;
  }
  
  const longTechs = filterwebTechs(webTechs);
  console.log(longTechs); 