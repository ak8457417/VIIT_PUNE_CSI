import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeIcon from "@mui/icons-material/Code";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import "./Timeline.css";

export default function AdvancedTimeline() {
    return (
        <div className="timeline-container">
            <h1 className="timeline-title">Event Timeline</h1>
            <Timeline position="alternate">
                {timelineData.map((event, index) => (
                    <TimelineItem key={index} className="timeline-item">
                        <TimelineSeparator>
                            {/*<TimelineConnector className="timeline-connector" />*/}
                            <TimelineDot className="timeline-dot" style={{ background: event.color }}>
                                {event.icon}
                            </TimelineDot>
                            <TimelineConnector className="timeline-connector" />
                        </TimelineSeparator>
                        <TimelineContent className="timeline-content">
                            <Typography variant="h6" className="timeline-heading">{event.title}</Typography>
                            <Typography className="timeline-time">{event.time}</Typography>
                            <Typography className="timeline-desc">{event.description}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
}

const timelineData = [
    { title: "🚀 Registrations", time: "Already Started", icon: <LocationOnRoundedIcon />, color: "#ff6b6b", description: "Exciting kickoff!" },
    { title: "📝 Quiz ( Online )", time: "Start: 15 Feb 25, 06:00 PM IST & \n" +
            "End: 15 Feb 25, 06:30 PM IST", icon: <LaptopMacIcon />, color: "#48dbfb", description: "Registered teams will begin with an online-based aptitude assessment, attempted solely by the team leader. This round tests Aptitude, Operating System, OOP concepts. Team members are not allowed to assist during the quiz." },
    { title: "💻 Idea Submission (via Unstop)", time: "Start: 16 Feb 25, 06:00 PM IST & \n" +
            "End: 19 Feb 25, 11:59 PM IST", icon: <CodeIcon />, color: "#1dd1a1", description: "Shortlisted teams will be provided with 5 problem statements, from which they must select one to address. Teams are required to submit a PowerPoint Presentation (PPT) detailing their proposed solution. Only one submission per team is permitted." },
    { title: "🎭 Evaluation of Submissions", time: "Start: 20 Feb 25, 12:00 AM IST & \n" +
            "End: 21 Feb 25, 06:00 PM IST", icon: <CoPresentIcon />, color: "#f368e0", description: "The shortlisted teams from the Idea Submission round will be notified by February 21. These teams will proceed to the Offline Presentation round." },
    { title: "🏆 Final Round", time: "Start: 25 Feb 25, 10:00 AM IST & \n" +
            "End: 25 Feb 25, 06:00 PM IST", icon: <EmojiEventsIcon />, color: "#feca57", description: "The final round will take place offline at the VIIT Pune campus, where teams will present their prototypes and PowerPoint presentations to the panel of judges." },
    { title: "📢 Winner Announcement", time: "Start: 25 Feb 25, 03:00 PM IST & \n" +
            "End: 25 Feb 25, 06:00 PM IST", icon: <Diversity3Icon />, color: "#ff9f43", description: "The winners will be declared on the event day after the final presentations are evaluated. 🏆" },
];
