import React, { useEffect, useState } from "react";
import RouteMap from '../components/mui/RouteMap';
import 'leaflet/dist/leaflet.css'
import Header from "../components/mui/Header"
import Footer from "../components/mui/Footer"
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import RuttApi from "../api/RuttApi";
import Loading from "../components/mui/Loading";
const CreateRutt = () => {
    var ruttApi = new RuttApi();
    const { ruttId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [rutt, setRutt] = useState({})
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const fetchedProfile = await ruttApi.findById(ruttId);
                setRutt(fetchedProfile);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching rutt:", error);
                // setIsLoading(true);
            }
        };

        fetchProfile();
    }, []);
    return (
        <>
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <RouteMap rutt={rutt} />
            )}
        </>
    );
};

export default CreateRutt;