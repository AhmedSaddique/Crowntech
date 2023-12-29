
import React, { useEffect, useState } from 'react'
import { Anchor ,Tabs  } from 'antd';
import { HeadingH3, HeadingH4 } from '../Heading';
import { Para14, Para16 } from '../ParaGraph';
import { AiOutlineHome } from 'react-icons/ai';
import { useTheme } from 'next-themes';
import axios from 'axios';


const ServiceTab = ({ activeinfoId }) => {
  const { theme, setTheme } = useTheme();

  const { TabPane } = Tabs;
  const [allServicetabs, setAllServicetabs] = useState([]);
  const [filteredServicetabs, setFilteredServicetabs] = useState([]);

  useEffect(() => {
    const fetchAllServicetabs = async () => {
      try {
        const response = await axios.get('/api/servicetab');
        setAllServicetabs(response.data.servicetabs);
        console.log("All Service Tabs:", response.data);
      } catch (error) {
        console.error('Error getting service tab:', error);
      }
    };

    fetchAllServicetabs();
  }, []);

useEffect(() => {
  // console.log("Active Info ID:", activeinfoId);
  const filteredData = allServicetabs.filter(tab => tab.serviceInfoId === activeinfoId);
  setFilteredServicetabs(filteredData);
  // console.log("Filtered Service Tabs:", filteredData);
}, [allServicetabs, activeinfoId]);
  return (
   <>
 <HeadingH3 title={'Media content storage and delivery'}/>
          <Tabs defaultActiveKey="1"  tabBarStyle={{ border: 'none' }} className={``}>
            {
              Array.isArray(filteredServicetabs) &&
              filteredServicetabs.map((items , index)=>(
                <TabPane  tab={<span className={`flex gap-1 ${
                  theme === 'dark' ? 'text-primary-white' : ' text-primary-black'
                }`}><AiOutlineHome  size={20} className='mt-1'/>{items.title}</span>} key={index + 1}>
                <div className={`space-y-3 ${
                  theme === 'dark' ? 'text-primary-white' : ' text-primary-black'
                }`}>
                  <HeadingH4 title={items.heading} />
                  <Para16 title={items.description}/>
                
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-5'>
                  {
                  items.subdata.map((items, index) =>(
                    <div className='border-t-2 p-2 shadow-md backdrop-blur-3xl' key={index+1}>
                      <Para14 title={items.description}/>
                    </div>
                  ))
                }

                  </div>
                </div>
              </TabPane>
              ))
            }
          </Tabs>
   </>
  )
}

export default ServiceTab