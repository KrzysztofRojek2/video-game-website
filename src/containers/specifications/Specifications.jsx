import React from 'react'
import './specifications.css'
import Specification from '../../components/specification/Specification'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faCalendar, faGamepad, faGlobe, faWrench} from '@fortawesome/free-solid-svg-icons';

const Specifications = () => {

  const spec2p1 = <p className='colored bolder underlined'>Single System (1)</p>
  const spec2p2 = <p className='colored bolder underlined'>Local wireless (1)</p>
  const spec2p3 = <p className='colored bolder underlined'>Online (1-4)</p>

  const spec3p1 = <p className='colored bolder underlined'>Role-Playing</p>
  const spec3p2 = <p className='colored bolder underlined'>Simulation</p>

  const spec4p1 = <p className='colored bolder underlined'>ConcernedApe</p>

  const spec1 = ["October 5, 2017"]
  const spec2 = [spec2p1, spec2p2, spec2p3]
  const spec3 = [spec3p1, spec3p2]
  const spec4 = [spec4p1]
  const spec5 = ["English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese"]

  return (
    <div className='specifications section-padding'>
      <Specification text={spec1} icon={faCalendar} textForIcon={"Release date"}/>
      <Specification text={spec2} icon={faGamepad} textForIcon={"Number of Players"}/>
      <Specification text={spec3} icon={faArchive} textForIcon={"Genre"}/>
      <Specification text={spec4} icon={faWrench} textForIcon={"Publisher"}/>
      <Specification text={spec5} icon={faGlobe} textForIcon={"Languages"}/>

    </div>
  )
}

export default Specifications
