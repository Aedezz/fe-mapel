import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LinearProgressWithLabel = ({ value }) => {
    return (
        <Box display="flex" alignItems="center" width="100%">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={value} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    );
};

export default LinearProgressWithLabel;
