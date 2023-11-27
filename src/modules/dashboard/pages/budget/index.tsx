import { Text } from "@chakra-ui/react";
import { Category, budgetCard } from "../../../../helper/keyConstants";
import { ChartComponent } from "../../components/charts";
import TabComponent from "../../components/tabs";

const Budget = () => {
  const dashboardCards = budgetCard.map((card) => {
    switch (card.id) {
      case 1:
        return { ...card };
      case 2:
        return { ...card };
      case 3:
        return { ...card };
      default:
        return card;
    }
  });

  const ThisMonthData = () => {
    const series = [20, 4, 20, 35, 12, 8];
    const labels = ["Transport", "Tools", "Data", "Food", "Books", "Phone"];

    return (
      <div>
        <div>
          <ChartComponent
            id="chart"
            type="donut"
            series={series}
            label={labels}
          />
        </div>

        <Text
          className="text-secondary text-center py-6"
          fontSize={"large"}
          fontWeight={"bold"}
        >
          Amount spent so far
        </Text>

        <div className="flex items-center justify-center ">
          <Text
            className="text-primary text-center"
            fontSize={"large"}
            fontWeight={"bold"}
          >
            &#8358; 50,0000
          </Text>{" "}
          <span className="text-primaryLight"> /</span>
          <Text
            className=" text-primaryLight text-center"
            fontSize={"large"}
            fontWeight={"bold"}
          >
            &#8358;120,000
          </Text>
        </div>

        <CategoryBreakDown />
      </div>
    );
  };

  const LastMonth = () => {
    return <div>This Month</div>;
  };

  const data = [
    {
      id: 1,
      label: "Last Month",
      content: <LastMonth />,
    },
    {
      id: 2,
      label: "This Month",
      content: <ThisMonthData />,
    },
  ];

  const CategoryBreakDown = () => {
    return (
      <div className="py-4  lg:mb-0">
        <Text fontSize="xl" fontWeight={"500"} py={6}>
          Category Breakdown
        </Text>
        <div className="flex flex-col gap-5">
          {Category?.map((category, index) => {
            return (
              <div key={index} className="flex justify-between">
                <div className="flex items-center gap-4">
                  <img src={`${category.icon}`} />
                  <div>
                    <p className="text-base font-semibold">{category.title}</p>
                    <p className="text-sm text-secondary mt-2">
                      {category.percentage}
                    </p>
                  </div>
                </div>
                <p>
                  &#8358;
                  <span className="font-semibold">{category.amount}</span> /
                  &#8358;
                  <span className="text-secondary">{category.total}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex py-1 space-x-10 ">
        {dashboardCards?.map((order) => {
          return (
            <div key={order.id} className="px-1 py-3.5 w-full lg:w-[30%]">
              <div className="flex gap-2 items-center">
                <img src={`${order.icon}`} alt="" />
                <p className="text-base font-medium font-clash text-secondary">
                  {order.title}
                </p>
              </div>

              <div className="text-[28px] mt-2 px-5 py-5 rounded-lg font-semibold font-clash text-heroColor bg-white w-full shadow-md">
                &#8358;{order.amount}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <TabComponent tabs={data} />
      </div>
    </div>
  );
};

export default Budget;
