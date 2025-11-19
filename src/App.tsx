
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />

        <Section id="about" title="About">
          <p>
            This research explores the intersection of human-computer interaction and generative AI.
            We investigate how large language models can be integrated into creative workflows to enhance
            human agency rather than replace it.
          </p>
          <p style={{ marginTop: '1em' }}>
            By focusing on "co-creation" rather than "automation," we propose a new framework for
            interaction design in the age of AI.
          </p>
        </Section>

        <Section id="methodology" title="Methodology">
          <p>
            Our approach combines qualitative user studies with iterative prototyping.
            We conducted in-depth interviews with 15 professional designers and developed
            three distinct prototypes to test our hypotheses.
          </p>
          <ul style={{ marginTop: '1em', paddingLeft: '1em', listStyle: 'disc' }}>
            <li>Phase 1: Contextual Inquiry</li>
            <li>Phase 2: Low-fidelity Prototyping</li>
            <li>Phase 3: User Evaluation</li>
          </ul>
        </Section>

        <Section id="results" title="Results">
          <p>
            The results indicate a significant shift in user perception when AI is framed as a
            collaborator. Participants reported higher satisfaction and ownership of the final output
            compared to traditional automation tools.
          </p>
          <div style={{
            marginTop: '2em',
            background: '#f0f0f0',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            [Placeholder for Data Visualization]
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Takumi Shioda<br />
            Department of Design, University of Tokyo<br />
            <a href="mailto:takumi@example.com" style={{ textDecoration: 'underline' }}>takumi@example.com</a>
          </p>
        </Section>
      </main>
    </div>
  );
}

export default App;
