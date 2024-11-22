import React, { useState } from 'react';

function LearningSolution() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => handleTabClick(0)}>Tab 1</button>
        <button onClick={() => handleTabClick(1)}>Tab 2</button>
        <button onClick={() => handleTabClick(2)}>Tab 3</button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <div>Content for Tab 1</div>}
        {activeTab === 1 && <div>Content for Tab 2</div>}
        {activeTab === 2 && <div>Content for Tab 3</div>}
      </div>
    </div>
  )
}

export default LearningSolution
