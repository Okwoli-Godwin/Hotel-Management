import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import styled from 'styled-components';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

interface EventData {
  title: string;
  start: Date;
  end: Date;
}

const events: EventData[] = [
  {
    title: 'Event 1',
    start: new Date(2023, 0, 1, 10, 0),
    end: new Date(2023, 0, 1, 12, 0),
  },
  {
    title: 'Event 2',
    start: new Date(2023, 0, 2, 14, 0),
    end: new Date(2023, 0, 2, 16, 0),
  },
];

const MyCalendar: React.FC = () => (
  <Container>
    <Wrapper>
      <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ 
        height: 500,
        backgroundColor: "#fff",
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "30px",
        paddingBottom: "30px",
        borderRadius: "10px",
        border: "1px solid #dbdfea"
      }}
    />
    </Wrapper>
  </Container>
)

export default MyCalendar
const Wrapper = styled.div`
    width: calc(100% - 21%);
    display: flex;
    flex-direction: column;
    padding-right: 25px;
    padding-left: 25px;
    height: 100%;
    margin-top: 40px;
`

const Container = styled.div`
  width: 100%;
    background-color: #F0F3FB;
    display: flex;
    justify-content: flex-end;
`