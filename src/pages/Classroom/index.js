import React from 'react';
import { Link } from 'react-router-dom';

import { Jutsu } from 'react-jutsu'

const Classroom = () => {
    return (
      <div>
          <h1>Aula</h1>
          <Link to="/">Voltar</Link>

          <Jutsu containerStyles={{ width: '1200px', height: '800px' }}
            roomName="sala_de_aula002"
            onMeetingEnd={() => console.log('Meeting has ended')}
            loadingComponent={<p>loading ...</p>}
            errorComponent={<p>Oops, something went wrong</p>} 
          />


      </div>
  )
}

export default Classroom;