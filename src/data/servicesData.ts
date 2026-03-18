import { Dumbbell, Heart, Users, Zap } from "lucide-react";

export const servicesData = [
    {
        id: 1,
        title: "Strength Training",
        description: "Build muscle and increase strength with our comprehensive weight training programs.",
        icon: Dumbbell,
        image:
            "https://images.unsplash.com/photo-1591291621164-2c6367723315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd2VpZ2h0c3xlbnwxfHx8fDE3NzM2MDc4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "training",
    },
    {
        id: 2,
        title: "Cardio Fitness",
        description: "Improve endurance and burn calories with state-of-the-art cardio equipment.",
        icon: Zap,
        image:
            "https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjBydW5uaW5nJTIwdHJlYWRtaWxsfGVufDF8fHx8MTc3MzU5MTA1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "cardio",
    },
    {
        id: 3,
        title: "Yoga & Wellness",
        description: "Find balance and flexibility through our guided yoga and meditation sessions.",
        icon: Heart,
        image:
            "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MzYwMDAwNHww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "wellness",
    },
    {
        id: 4,
        title: "Group Classes",
        description: "Join energetic group sessions including HIIT, spin, and dance fitness.",
        icon: Users,
        image:
            "https://images.unsplash.com/photo-1772206605293-3fadeaa944e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3JvdXAlMjBjbGFzc3xlbnwxfHx8fDE3NzM2NTUyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "classes",
    },
];

export const serviceCategories = [
    { id: "all", label: "All Services" },
    { id: "training", label: "Training" },
    { id: "cardio", label: "Cardio" },
    { id: "wellness", label: "Wellness" },
    { id: "classes", label: "Classes" },
];
