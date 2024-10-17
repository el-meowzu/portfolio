function SkillList({src, skill}) {
  return (
    <span>
        <img src={src} alt="check Mark" />
        <p>{skill}</p>
    </span>
  );
}

export default SkillList