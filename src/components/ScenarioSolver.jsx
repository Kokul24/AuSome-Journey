import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTTS } from '../hooks/useTTS';

// 1. Data Structure
const scenarios = [
    {
        id: "firefighter",
        problem: "Oh no! There is a big fire in the building!",
        correctLocation: "Fire Station",
        correctAction: "Spray Water",
        profession: "Firefighter",
        route: "/job/firefighter"
    },
    {
        id: "doctor",
        problem: "Someone is feeling very sick and has a fever.",
        correctLocation: "Hospital",
        correctAction: "Give Medicine",
        profession: "Doctor",
        route: "/job/doctor"
    },
    {
        id: "chef",
        problem: "The customers are very hungry and want dinner.",
        correctLocation: "Restaurant",
        correctAction: "Cook Food",
        profession: "Chef",
        route: "/job/chef"
    },
    {
        id: "astronaut",
        problem: "We need to go explore the moon and stars.",
        correctLocation: "Space Station",
        correctAction: "Fly Rocket",
        profession: "Astronaut",
        route: "/job/astronaut"
    },
    {
        id: "police",
        problem: "A bad guy stole a bag! We need help!",
        correctLocation: "Police Station",
        correctAction: "Catch Bad Guys",
        profession: "Police Officer",
        route: "/job/police"
    },
    {
        id: "teacher",
        problem: "The children are in class and want to learn math.",
        correctLocation: "School",
        correctAction: "Teach Students",
        profession: "Teacher",
        route: "/job/teacher"
    },
    {
        id: "farmer",
        problem: "We need fresh vegetables and fruits to eat.",
        correctLocation: "Farm",
        correctAction: "Harvest Crops",
        profession: "Farmer",
        route: "/job/farmer"
    },
    {
        id: "builder",
        problem: "A family needs a new house to live in.",
        correctLocation: "Construction Site",
        correctAction: "Build House",
        profession: "Builder",
        route: "/job/builder"
    }
];

const locations = [
    "Hospital", "Fire Station", "Restaurant", "Police Station",
    "School", "Space Station", "Farm", "Construction Site"
];

const actions = [
    "Give Medicine", "Spray Water", "Cook Food", "Catch Bad Guys",
    "Teach Students", "Fly Rocket", "Harvest Crops", "Build House"
];

// Stateless Functional Component
const ProblemDisplay = ({ problem }) => {
    return (
        <div style={{
            border: '2px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            marginBottom: '20px'
        }}>
            <h3 style={{ fontSize: '20px', color: '#333' }}>{problem}</h3>
        </div>
    );
};

class ScenarioSolverClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScenario: null,
            selectedLocation: "",
            selectedAction: "",
            message: "",
            isCorrect: false
        };
    }

    componentDidMount() {
        this.loadNewScenario();
    }

    loadNewScenario = () => {
        const randomIndex = Math.floor(Math.random() * scenarios.length);
        this.setState({
            currentScenario: scenarios[randomIndex],
            selectedLocation: "",
            selectedAction: "",
            message: "",
            isCorrect: false
        }, () => {
            // Mimic the useEffect behavior for auto-read
            if (this.state.currentScenario) {
                setTimeout(() => {
                    this.props.speak(this.state.currentScenario.problem);
                }, 500);
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { selectedLocation, selectedAction, currentScenario } = this.state;

        if (!selectedLocation || !selectedAction) {
            this.setState({ message: "Please select both options." });
            return;
        }

        if (selectedLocation === currentScenario.correctLocation &&
            selectedAction === currentScenario.correctAction) {
            this.setState({ isCorrect: true });
            const msg = `Correct! You are a ${currentScenario.profession}!`;
            this.setState({ message: msg });
            this.props.speak(msg);
            setTimeout(() => this.props.navigate(currentScenario.route), 2000);
        } else {
            this.setState({ message: "Incorrect. Try again!" });
            this.props.speak("Incorrect. Try again!");
        }
    };

    handleLocationChange = (e) => {
        this.setState({ selectedLocation: e.target.value });
    }

    handleActionChange = (e) => {
        this.setState({ selectedAction: e.target.value });
    }

    render() {
        const { currentScenario, selectedLocation, selectedAction, message, isCorrect } = this.state;

        if (!currentScenario) return <div>Loading...</div>;

        return (
            <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>What should we do?</h2>

                {/* Using the Stateless Component */}
                <ProblemDisplay problem={currentScenario.problem} />

                <form onSubmit={this.handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Where should we go?
                        </label>
                        <select
                            value={selectedLocation}
                            onChange={this.handleLocationChange}
                            style={{ padding: '10px', width: '100%', fontSize: '16px' }}
                        >
                            <option value="">Select Location</option>
                            {locations.map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            What is the job?
                        </label>
                        <select
                            value={selectedAction}
                            onChange={this.handleActionChange}
                            style={{ padding: '10px', width: '100%', fontSize: '16px' }}
                        >
                            <option value="">Select Action</option>
                            {actions.map(act => (
                                <option key={act} value={act}>{act}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: '12px 24px',
                            fontSize: '18px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Solve Scenario
                    </button>
                </form>

                <button
                    onClick={this.loadNewScenario}
                    style={{ marginTop: '20px', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}
                >
                    New Problem
                </button>

                {message && (
                    <div style={{
                        marginTop: '20px',
                        padding: '10px',
                        backgroundColor: isCorrect ? '#d4edda' : '#f8d7da',
                        color: isCorrect ? '#155724' : '#721c24',
                        borderRadius: '5px'
                    }}>
                        {message}
                    </div>
                )}
            </div>
        );
    }
}

// Wrapper to provide hooks to class component
const ScenarioSolver = (props) => {
    const navigate = useNavigate();
    const { speak } = useTTS();

    return <ScenarioSolverClass {...props} navigate={navigate} speak={speak} />;
};

export default ScenarioSolver;
