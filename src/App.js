import TitlePage from './Components/pages/TitlePage';
import WhatIsCryptoPage from './Components/pages/WhatIsCryptoPage';
import WhyIsItBadPage from './Components/pages/WhyIsItBadPage';
import WhatSolutionPage from 'Components/pages/WhatSolutionPage';
import SolutionEffectPage from 'Components/pages/SolutionEffectPage';
import ReferencesPage from 'Components/pages/ReferencesPage';
import HabitatPage from 'Components/pages/HabitatPage';
import WhyIsItBadGraph from 'Components/pages/WhyIsItBadGraph';
import CarbonCyclePage from 'Components/pages/CarbonCyclePage';
import RestraintsPage from 'Components/pages/RestraintsPage';
import { Component, createRef } from 'react';
import SolutionCarbonCyclePage from 'Components/pages/SolutionCarbonCyclePage';
import { scrollToComponent } from './modules/utils';
import './App.scss';

class App extends Component {
	constructor() {
		super();

		this.scrollerRef = createRef();
	}
	render() {
		return (
			<>
				<TitlePage
					scroller={() => scrollToComponent(this.scrollerRef)}
				/>
				<WhatIsCryptoPage scrollRef={this.scrollerRef} />
				<WhyIsItBadPage />
				<WhyIsItBadGraph />
				<HabitatPage />
				<CarbonCyclePage />
				<WhatSolutionPage />
				<SolutionCarbonCyclePage />
				<SolutionEffectPage />
				<RestraintsPage />
				<ReferencesPage />
			</>
		);
	}
}

export default App;
