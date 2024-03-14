import profile from "../../assets/images/project.img/profile.png";

const Header = () => {
  return (
    <header className=" bg-[#6047EC1A]">
      <div className="flex justify-between pt-10 container mx-auto pb-10">
        <h1 className="text-5xl font-bold ">
          React Knowledge Cafe <br /> Project
        </h1>
        <img
          className="w-28 border-2 p-2 border-white rounded-full bg-white"
          src={profile}
          alt="profile picture"
        />
      </div>
    </header>
  );
};

export default Header;
