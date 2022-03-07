import Typewriter from 'typewriter-effect';

export default function TypingEffect(props: { messages: string[] }) {
  return (
    <div>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 0,
        }}
        onInit={(typewriter) => {
          props.messages.map((msg, index) => typewriter.typeString(msg).pauseFor(1000).deleteAll(0));

          //   typewriter
          //     .pauseFor(1000)
          //     .deleteAll()
          // .callFunction(() => {
          //   console.log('All strings were deleted');
          // })
          typewriter.pauseFor(500).start();
        }}
      />
    </div>
  );
}
