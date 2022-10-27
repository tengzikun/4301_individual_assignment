import React from 'react';
import { Chip, Button, Grid, styled } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const Admission = () => {
  const admissionStyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Sans-Serif',
    textAlign: 'centre'
  };

  const logoStyle = {
    width: 270,
    height: 180
  };
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home');
  };

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
  }));

  function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
      </SvgIcon>
    );
  }

  return (
    <div>
      <br />
      <div
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          display: 'flex'
        }}
      >
        <div>
          <div>
            <Div>{'Admission'}</Div>
          </div>
          <Timeline position='alternate'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <a href='https://www.nus.edu.sg/oam/apply-to-nus/singapore-cambridge-gce-a-level/admissions-requirements'>
                  1. Understanding Admission requirements
                </a>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <a href='https://nus.edu.sg/oam/apply-to-nus/application'>
                  2. Submit application online
                </a>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <a href='https://www.nus.edu.sg/oam/docs/default-source/admissions/uploading-instructions-flowchart.pdf'>
                  3. Upload supporting documents
                </a>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <a href='https://www.nus.edu.sg/oam/apply-to-nus/when-you-apply/payment-of-application-fee'>
                  4. Make application fee payment
                </a>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <a href='https://www.nus.edu.sg/oam/apply-to-nus/after-you-apply/check-application-status'>
                  5. Check application status
                </a>{' '}
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Admission;
