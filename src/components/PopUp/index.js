import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const Modal = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        // Retrieve the value of ModelKey from session storage
        const storedValue = sessionStorage.getItem('Client');
        // If the stored value is 'false', close the modal
        if (storedValue === 'false') {
            setOpen(false);
        }else {
            // If the stored value is not 'false', set it to 'false' and close the modal
            sessionStorage.setItem('Client', 'true');
            setOpen(true);
        }
    }, []);

    const handleClose = () => {
        // Set the value of ModelKey to 'false' in session storage
        sessionStorage.setItem('Client', 'false');
        // Update the state to close the modal
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Promotion
                <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/image.jpg" alt="Promotion Image" style={{ maxWidth: '50%', marginRight: '16px' }} width={600} height={500} />
                <Typography>
                    This is a promotion message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
                    nisl et lectus sodales tempor.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;
