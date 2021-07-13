import React from 'react'
import Icon1 from '../../images/icon-brand-recognition.svg'
import Icon2 from '../../images/icon-detailed-records.svg'
import Icon3 from '../../images/icon-fully-customizable.svg'

import { StatisticsContainer, StatisticsH1, StatisticsWrapper, StatisticsCard, StatisticsIcon, StatisticsH2, StatisticsP } from './statistics_elements'

const Statistics = () => {
    return (
        <StatisticsContainer >
            <StatisticsH1>Advanced Statistics</StatisticsH1>
            <StatisticsWrapper>
                <StatisticsCard>
                    <StatisticsIcon src={Icon1}/>
                    <StatisticsH2>
                          Brand Recognition
                    </StatisticsH2>
                    <StatisticsP>Boost your brand recognition with each click.Generic links dont mean a thing.
                    </StatisticsP>
                </StatisticsCard>

                <StatisticsCard>
                    <StatisticsIcon src={Icon2}/>
                    <StatisticsH2>
                          Detailed Records
                    </StatisticsH2>
                    <StatisticsP>Gain insights into who is clicking your links. 
                    
                    </StatisticsP>
                </StatisticsCard>

                <StatisticsCard>
                    <StatisticsIcon src={Icon3}/>
                    <StatisticsH2>
                          Fully Customizable
                    </StatisticsH2>
                    <StatisticsP>Improve brand awareness and content discoverability through customizable links.
                    </StatisticsP>
                </StatisticsCard>
            </StatisticsWrapper>
            
        </StatisticsContainer>
    )
}

export default Statistics
