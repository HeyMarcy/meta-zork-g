/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { SIZES } from '../../styling/variables';
import GameState from './GameState';
import ResponseModal from './ResponseModal';
import RoomDescription from './RoomDescription';
import Sidebar from './Sidebar';
import MashStatusModal from './MashStatusModal';

const screenStyle = css({
    display: 'grid',
    gridGap: SIZES.STANDARD,
    gridTemplateRows: `calc(100vh - ${SIZES.DOUBLE})`,
    gridTemplateColumns: '2fr 1fr',
    gridTemplateAreas: '"main sidebar"',
    width: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    padding: SIZES.STANDARD,
});

const mainStyle = css({ maxHeight: '100%', minHeight: 0, gridArea: 'main' });
const sidebarStyle = css({ maxHeight: '100%', minHeight: 0, gridArea: 'sidebar' });

const Screen: React.FunctionComponent<{}> = () => {
    return (
        <GameState>
            {(room, puzzle, inventory, exitDescriptions, actions, response, descriptionFlag, mashSettings) => {
                return (
                    <div css={screenStyle}>
                        <main css={mainStyle}>
                            <RoomDescription
                                room={room}
                                puzzle={puzzle}
                                exitDescriptions={exitDescriptions}
                                descriptionFlag={descriptionFlag}
                                actions={actions}
                            />
                        </main>
                        <aside css={sidebarStyle}>
                            <Sidebar room={room} inventory={inventory} actions={actions} />
                        </aside>
                        <ResponseModal response={response} onClose={actions.clearResponse} />
                        <MashStatusModal {...mashSettings} />
                    </div>
                );
            }
        }
        </GameState>
    );
};

export default Screen;
