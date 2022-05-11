import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
export default function Hr({ size }) {
    const [hr, setHr] = useState();
    useEffect(() => {
        let temp = "";
        for (let i = 0; i < size; i++) {
            temp += "_";
        }
        setHr(temp);
        console.log(size)
    }, []);
    return <Text style={{ textAlign: "center" }}>{hr}</Text>
}