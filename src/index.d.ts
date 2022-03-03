import React from 'react';

export interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
    centerStyle?: boolean;
}

export interface Feedback {
    name: string;
    text: string;
    grade: number;
    location: string;
}