import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { faPhone, faVideo } from '@fortawesome/free-solid-svg-icons';
import ActionButton from './ActionButton';
import { socket } from '../communication';

function useClientID() {
  const [clientID, setClientID] = useState('');

  useEffect(() => {
    socket
      .on('init', ({ id }) => {
        document.title = `${id} - VideoCall`;
        setClientID(id);
      });
  }, []);

  return clientID;
}

function MainWindow({ startCall }) {
  const clientID = useClientID();
  const [friendID, setFriendID] = useState(null);

  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => friendID && startCall(true, friendID, config);
  };

  return (
    <div className="container main-window">
      <div>
        <h3>
        Sinyaliniz:
          <input
            type="text"
            className="txt-clientId"
            defaultValue={clientID}
            readOnly
          />
        </h3>
        <h4>Aşağıdan bir arkadaşınızı arayarak başlayın</h4>
      </div>
      <divs style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}>
        <input
          type="text"
          className="txt-clientId"
          spellCheck={false}
          placeholder="Arkadaşınızın signali"
          onChange={(event) => setFriendID(event.target.value)}
        />
        <div>
          <ActionButton icon={faVideo} onClick={callWithVideo(true)} color="green"/>
          <ActionButton icon={faPhone} onClick={callWithVideo(false)} color="blue"/>
        </div>
      </divs>
    </div>
  );
}

MainWindow.propTypes = {
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
