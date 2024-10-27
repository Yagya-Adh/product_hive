const tabData = [
  {
    id: 1,
    tabTitle: "All Blogs",
    isActive: true,
  },
  {
    id: 2,
    tabTitle: "Recent",
    isActive: false,
  },
  {
    id: 3,
    tabTitle: "Business",
    isActive: false,
  },
  {
    id: 4,
    tabTitle: "Empowered independent",
    isActive: false,
  },
];

const PillTabs = () => {
  return (
    <section>
      <ul className="flex items-center">
        {tabData?.slice(0, 4).map((list) => (
          <li
            className={`
          rounded-full 
          px-3
          py-2
          mx-2 
          font-bold 
          border 
          text-center
          text-xl
          hover:bg-productHives-buttonColor
          text-productHives-mainBackground
          transition-all
          ease-in-out 
          duration-500
${list.isActive == true ? "bg-productHives-buttonColor " : "bg-white"}

          `}
            key={list.id}
          >
            {list.tabTitle}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PillTabs;
