import React, { useEffect, useState } from 'react';
import {
    TextField,
    Button,
    Grid,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Typography,
    Alert,
    Container,
    Box
} from '@mui/material';

const CreateSlider = () => {
    // Details
    //1
    const [titleOne, setTitleOne] = useState('');
    const [subtitleOne, setSubtitleOne] = useState('');
    const [desOne, setDesOne] = useState('');
    const [sliderImgOne, setSliderImgOne] = useState(null);
    const [variationCenterOne, setVariationCenterOne] = useState('');
    const [variationRightOne, setVariationRightOne] = useState('');
    //2
    const [titleTwo, setTitleTwo] = useState('');
    const [subtitleTwo, setSubtitleTwo] = useState('');
    const [desTwo, setDesTwo] = useState('');
    const [sliderImgTwo, setSliderImgTwo] = useState(null);
    const [variationCenterTwo, setVariationCenterTwo] = useState('');
    const [variationRightTwo, setVariationRightTwo] = useState('');
    //3
    const [titleThree, setTitleThree] = useState('');
    const [subtitleThree, setSubtitleThree] = useState('');
    const [desThree, setDesThree] = useState('');
    const [sliderImgThree, setSliderImgThree] = useState(null);
    const [variationCenterThree, setVariationCenterThree] = useState('');
    const [variationRightThree, setVariationRightThree] = useState('');
    //4
    const [titleFour, setTitleFour] = useState('');
    const [subtitleFour, setSubtitleFour] = useState('');
    const [desFour, setDesFour] = useState('');
    const [sliderImgFour, setSliderImgFour] = useState(null);
    const [variationCenterFour, setVariationCenterFour] = useState('');
    const [variationRightFour, setVariationRightFour] = useState('');
    //5
    const [titleFive, setTitleFive] = useState('');
    const [subtitleFive, setSubtitleFive] = useState('');
    const [desFive, setDesFive] = useState('');
    const [sliderImgFive, setSliderImgFive] = useState(null);
    const [variationCenterFive, setVariationCenterFive] = useState('');
    const [variationRightFive, setVariationRightFive] = useState('');
    //Six
    const [titleSix, setTitleSix] = useState('');
    const [subtitleSix, setSubtitleSix] = useState('');
    const [desSix, setDesSix] = useState('');
    const [sliderImgSix, setSliderImgSix] = useState(null);
    const [variationCenterSix, setVariationCenterSix] = useState('');
    const [variationRightSix, setVariationRightSix] = useState('');
    //Seven 
    const [titleSeven, setTitleSeven] = useState('');
    const [subtitleSeven, setSubtitleSeven] = useState('');
    const [desSeven, setDesSeven] = useState('');
    const [sliderImgSeven, setSliderImgSeven] = useState(null);
    const [variationCenterSeven, setVariationCenterSeven] = useState('');
    const [variationRightSeven, setVariationRightSeven] = useState('');

    // getSlider
    const [getSlider, setGetSlider] = useState(true);

    const [alert, setAlert] = useState({ type: '', message: '' });

    const FileAccess = "https://micasa-server-test.vercel.app/api/files";

    useEffect(() => {
        async function getSlider() {
            try {
                const response = await fetch("https://micasa-server-test.vercel.app/api/HomePage/getSlider", {
                    method: 'GET',
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch slider data');
                }
                const data = await response.json();
                console.log(data);
                setGetSlider(data);
            } catch (error) {
                console.error('Error fetching slider data:', error);
            }
        }
        getSlider();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // // Consolidated empty field check for all sections
        // const emptyFields = [
        //     !titleOne || !subtitleOne || !desOne || !sliderImgOne || !variationCenterOne || !variationRightOne,
        //     !titleTwo || !subtitleTwo || !desTwo || !sliderImgTwo || !variationCenterTwo || !variationRightTwo,
        //     !titleThree || !subtitleThree || !desThree || !sliderImgThree || !variationCenterThree || !variationRightThree,
        //     !titleFour || !subtitleFour || !desFour || !sliderImgFour || !variationCenterFour || !variationRightFour,
        //     !titleFive || !subtitleFive || !desFive || !sliderImgFive || !variationCenterFive || !variationRightFive,
        //     !titleSix || !subtitleSix || !desSix || !sliderImgSix || !variationCenterSix || !variationRightSix,
        //     !titleSeven || !subtitleSeven || !desSeven || !sliderImgSeven || !variationCenterSeven || !variationRightSeven
        // ];

        // // Check if any section has empty fields
        // const hasEmptyFields = emptyFields.some(field => field);

        // if (hasEmptyFields) {
        //     setAlert({ type: 'warning', message: 'Please fill in all fields in all sections.' });
        //     return;
        // }

        // Proceed with form submission or further logic
        try {
            const formData = new FormData();
            formData.append(`titleOne`, titleOne);
            formData.append(`subtitleOne`, subtitleOne);
            formData.append(`desOne`, desOne);
            formData.append(`sliderImageOne`, sliderImgOne);
            formData.append(`variationCenterOne`, variationCenterOne);
            formData.append(`variationRightOne`, variationRightOne);

            formData.append(`titleTwo`, titleTwo);
            formData.append(`subtitleTwo`, subtitleTwo);
            formData.append(`desTwo`, desTwo);
            formData.append(`sliderImageTwo`, sliderImgTwo);
            formData.append(`variationCenterTwo`, variationCenterTwo);
            formData.append(`variationRightTwo`, variationRightTwo);

            formData.append(`titleThree`, titleThree);
            formData.append(`subtitleThree`, subtitleThree);
            formData.append(`desThree`, desThree);
            formData.append(`sliderImageThree`, sliderImgThree);
            formData.append(`variationCenterThree`, variationCenterThree);
            formData.append(`variationRightThree`, variationRightThree);

            formData.append(`titleFour`, titleFour);
            formData.append(`subtitleFour`, subtitleFour);
            formData.append(`desFour`, desFour);
            formData.append(`sliderImageFour`, sliderImgFour);
            formData.append(`variationCenterFour`, variationCenterFour);
            formData.append(`variationRightFour`, variationRightFour);

            formData.append(`titleFive`, titleFive);
            formData.append(`subtitleFive`, subtitleFive);
            formData.append(`desFive`, desFive);
            formData.append(`sliderImageFive`, sliderImgFive);
            formData.append(`variationCenterFive`, variationCenterFive);
            formData.append(`variationRightFive`, variationRightFive);

            formData.append(`titleSix`, titleSix);
            formData.append(`subtitleSix`, subtitleSix);
            formData.append(`desSix`, desSix);
            formData.append(`sliderImageSix`, sliderImgSix);
            formData.append(`variationCenterSix`, variationCenterSix);
            formData.append(`variationRightSix`, variationRightSix);

            formData.append(`titleSeven`, titleSeven);
            formData.append(`subtitleSeven`, subtitleSeven);
            formData.append(`desSeven`, desSeven);
            formData.append(`sliderImageSeven`, sliderImgSeven);
            formData.append(`variationCenterSeven`, variationCenterSeven);
            formData.append(`variationRightSeven`, variationRightSeven);

            const response = await fetch('/api/HomePage/SliderRoute', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setAlert({ type: 'success', message: 'Slider uploaded successfully!' });
            } else {
                setAlert({ type: 'error', message: 'Error uploading Slider. Please try again.' });
            }
        } catch (error) {
            console.error('Error uploading Slider:', error);
            setAlert({ type: 'error', message: 'Error uploading Slider. Please try again.' });
        }
    };

    return (
        <>
        {getSlider.length == 0 ? <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    HomePage Slider
                </Typography>
                <form>
                    {/* Section 1 */}
                    <Box mb={4}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Section 1
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={titleOne}
                                    onChange={(e) => { setTitleOne(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Subtitle"
                                    variant="outlined"
                                    fullWidth
                                    value={subtitleOne}
                                    onChange={(e) => { setSubtitleOne(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={desOne}
                                    onChange={(e) => { setDesOne(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <b>Upload Slider Image 1</b><br/>
                                    <input
                                        type="file"
                                        onChange={(e) => setSliderImgOne(e.target.files[0])}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Center</InputLabel>
                                    <Select
                                        value={variationCenterOne}
                                        onChange={(e) => { setVariationCenterOne(e.target.value) }}
                                        label="Variation Center"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Right</InputLabel>
                                    <Select
                                        value={variationRightOne}
                                        onChange={(e) => { setVariationRightOne(e.target.value) }}
                                        label="Variation Right"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* 1st Section End*/}

                    {/* Section 2 */}
                    <Box mb={4}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Section 2
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={titleTwo}
                                    onChange={(e) => { setTitleTwo(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Subtitle"
                                    variant="outlined"
                                    fullWidth
                                    value={subtitleTwo}
                                    onChange={(e) => { setSubtitleTwo(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={desTwo}
                                    onChange={(e) => { setDesTwo(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <b>Upload Slider Image 2</b><br/>
                                    <input
                                        type="file"
                                        onChange={(e) => setSliderImgTwo(e.target.files[0])}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Center</InputLabel>
                                    <Select
                                        value={variationCenterTwo}
                                        onChange={(e) => { setVariationCenterTwo(e.target.value) }}
                                        label="Variation Center"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Right</InputLabel>
                                    <Select
                                        value={variationRightTwo}
                                        onChange={(e) => { setVariationRightTwo(e.target.value) }}
                                        label="Variation Right"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* 2st Section End*/}

                    {/* Section 3 */}
                    <Box mb={4}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Section 3
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={titleThree}
                                    onChange={(e) => { setTitleThree(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Subtitle"
                                    variant="outlined"
                                    fullWidth
                                    value={subtitleThree}
                                    onChange={(e) => { setSubtitleThree(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={desThree}
                                    onChange={(e) => { setDesThree(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                    Upload Slider Image 3
                                    <input
                                        type="file"
                                        onChange={(e) => setSliderImgThree(e.target.files[0])}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Center</InputLabel>
                                    <Select
                                        value={variationCenterThree}
                                        onChange={(e) => { setVariationCenterThree(e.target.value) }}
                                        label="Variation Center"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Right</InputLabel>
                                    <Select
                                        value={variationRightThree}
                                        onChange={(e) => { setVariationRightThree(e.target.value) }}
                                        label="Variation Right"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* 3rd Section */}
                    {/* Section 4 */}
                    <Box mb={4}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Section 4
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={titleFour}
                                    onChange={(e) => { setTitleFour(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Subtitle"
                                    variant="outlined"
                                    fullWidth
                                    value={subtitleFour}
                                    onChange={(e) => { setSubtitleFour(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={desFour}
                                    onChange={(e) => { setDesFour(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <b>Upload Slider Image 4</b><br/>
                                    <input
                                        type="file"
                                        onChange={(e) => setSliderImgFour(e.target.files[0])}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Center</InputLabel>
                                    <Select
                                        value={variationCenterFour}
                                        onChange={(e) => { setVariationCenterFour(e.target.value) }}
                                        label="Variation Center"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Right</InputLabel>
                                    <Select
                                        value={variationRightFour}
                                        onChange={(e) => { setVariationRightFour(e.target.value) }}
                                        label="Variation Right"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* 4th Section */}
                    <Box mb={4}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Section 5
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={titleFive}
                                    onChange={(e) => setTitleFive(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Subtitle"
                                    variant="outlined"
                                    fullWidth
                                    value={subtitleFive}
                                    onChange={(e) => setSubtitleFive(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={desFive}
                                    onChange={(e) => setDesFive(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                    <b>Upload Slider Image 5</b><br/>
                                    <input
                                        type="file"
                                        onChange={(e) => setSliderImgFive(e.target.files[0])}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Center</InputLabel>
                                    <Select
                                        value={variationCenterFive}
                                        onChange={(e) => setVariationCenterFive(e.target.value)}
                                        label="Variation Center"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Right</InputLabel>
                                    <Select
                                        value={variationRightFive}
                                        onChange={(e) => setVariationRightFive(e.target.value)}
                                        label="Variation Right"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* 5th End here */}
                    {/* 6th Section */}
                    <Box mb={4}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Section 6
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={titleSix}
                                    onChange={(e) => setTitleSix(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Subtitle"
                                    variant="outlined"
                                    fullWidth
                                    value={subtitleSix}
                                    onChange={(e) => setSubtitleSix(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={desSix}
                                    onChange={(e) => setDesSix(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                    <b>Upload Slider Image 5</b><br/>
                                    <input
                                        type="file"
                                        onChange={(e) => setSliderImgSix(e.target.files[0])}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Center</InputLabel>
                                    <Select
                                        value={variationCenterSix}
                                        onChange={(e) => setVariationCenterSix(e.target.value)}
                                        label="Variation Center"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Right</InputLabel>
                                    <Select
                                        value={variationRightSix}
                                        onChange={(e) => setVariationRightSix(e.target.value)}
                                        label="Variation Right"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* 6th Section Here */}
                    {/* Seven Section Start*/}
                    <Box mb={4}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Section 7
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={titleSeven}
                                    onChange={(e) => setTitleSeven(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Subtitle"
                                    variant="outlined"
                                    fullWidth
                                    value={subtitleSeven}
                                    onChange={(e) => setSubtitleSeven(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={desSeven}
                                    onChange={(e) => setDesSeven(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <b>Upload Slider Image 7</b><br/>
                                    <input
                                        type="file"
                                        onChange={(e) => setSliderImgSeven(e.target.files[0])}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Center</InputLabel>
                                    <Select
                                        value={variationCenterSeven}
                                        onChange={(e) => setVariationCenterSeven(e.target.value)}
                                        label="Variation Center"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Variation Right</InputLabel>
                                    <Select
                                        value={variationRightSeven}
                                        onChange={(e) => setVariationRightSeven(e.target.value)}
                                        label="Variation Right"
                                    >
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* 7th Section End Here */}
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                        Submit
                    </Button>
                </form>
                {alert.message && (
                    <Alert severity={alert.type} onClose={() => setAlert({ type: '', message: '' })}>
                        {alert.message}
                    </Alert>
                )}
            </Box>
        </Container> : <div><center><h1>1st Delete HomePage Slider from Dashboard </h1></center></div>}
        </>
    );
};

export default CreateSlider;
