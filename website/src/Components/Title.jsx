import React, { useEffect, useState } from "react";
import UseWindowDimensions from "../WindowUtilites";
import { motion, useTime, useTransform } from "motion/react";
import './Title.css';
import { useFrame } from "@react-three/fiber";

function Title(text)
{
    const { titleText } = text;

    return (
        <div className="Title">
            <h1>{titleText}</h1>
        </div>
    )
}

export default Title;