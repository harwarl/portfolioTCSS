const SkillCard = ({ icon, title, text }) => {
  return (
    <arrticle>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </arrticle>
  );
};

export default SkillCard;
