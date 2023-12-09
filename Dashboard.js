import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import Dropdown from './Dropdown';

const quarters = ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'];

const Dashboard = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(quarters[0]);
  const [quarterData, setQuarterData] = useState({});

  useEffect(() => {
    // Fetch data for the selected quarter (API call would go here)
    const fetchData = async () => {
      // Example hardcoded data for demonstration
      const hardcodedData = {
        'Quarter 1': { Revenue: '716.57 B', NetIncome: '154.77 B', NetProfit: '21.60%', OperatingIncome: '213.55 B' },
        'Quarter 2': { Revenue: '607.66 B', NetIncome: '180.94 B', NetProfit: '29.78%', OperatingIncome: '049.95 B' },
        'Quarter 3': { Revenue: '711.87 B', NetIncome: '185.37 B', NetProfit: '26.04%', OperatingIncome: '252.08 B' },
        'Quarter 4': { Revenue: '805.33 B', NetIncome: '161.00 B', NetProfit: '19.99%', OperatingIncome: '219.36 B' },
      };

      setQuarterData(hardcodedData[selectedQuarter]);
    };

    fetchData();
  }, [selectedQuarter]);

  const handleQuarterChange = (selected) => {
    setSelectedQuarter(selected);
  };

  return (
    <div>
      <div className="nav-child">
        <h1>SBI Dashboard</h1>
        <label>Select Quarter:</label>
        <Dropdown options={quarters} selected={selectedQuarter} onChange={handleQuarterChange} />
        <div>
          <Tile title="Revenue" value={quarterData.Revenue} />
          <Tile title="Net Income" value={quarterData.NetIncome} />
          <Tile title="Net Profit" value={quarterData.NetProfit} />
          <Tile title="Operating Income (INR)" value={quarterData.OperatingIncome} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;