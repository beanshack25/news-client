import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Flashcard, { Card } from "./components/Flashcard.tsx";
import Scroll from "./components/Scroll.tsx";
import ScrollButton from "./components/ScrollButton.tsx";

function App() {
  const [scrollAmounts, setScrollAmounts] = useState<number[]>([0]);
  const [scrolls, setScrolls] = useState<Card[][]>([
    [],
    // [
    //   {
    //     title:
    //       "What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum odio id mi elementum, sit amet maximus lorem cursus. Fusce maximus diam a tincidunt pharetra. Morbi nec nisi leo. Vestibulum tincidunt accumsan commodo. Nunc tincidunt quam interdum venenatis vestibulum. Quisque nec sapien elementum erat pulvinar ornare. Phasellus rutrum ultricies felis et rhoncus. Fusce tempor sapien non sapien hendrerit, non pulvinar nulla dapibus. Donec eleifend luctus urna, ac consequat dui tempor a.\nNulla eget dictum dui. Duis lorem lorem, egestas et ullamcorper quis, tincidunt vitae lorem. In hac habitasse platea dictumst. Praesent finibus nec ligula in fringilla. Duis at placerat lorem, vel molestie libero. Proin vehicula elit arcu, at maximus enim maximus eget. Praesent interdum ultrices nisi venenatis dictum.\nQuisque vestibulum odio eget rutrum rhoncus. Integer sodales sit amet lectus id scelerisque. Vivamus viverra lobortis semper. Vivamus viverra suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor rutrum euismod. Phasellus sollicitudin maximus nunc, in molestie tortor consectetur ut. Maecenas quis odio facilisis, pulvinar elit nec, consectetur metus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mattis dignissim rutrum. Integer et tincidunt dui. Pellentesque rhoncus eros quis feugiat rhoncus. Nam consectetur mi et enim ultricies vulputate. Maecenas imperdiet, turpis ac tempus tincidunt, nisl enim ornare odio, nec fringilla nulla ante nec ipsum. Curabitur nec libero nec nisi commodo lobortis eget sit amet neque. Curabitur eu tincidunt lectus.\nNullam pulvinar posuere lobortis. Duis nec congue sem. Curabitur laoreet venenatis diam, eget dignissim lectus luctus nec. Pellentesque malesuada enim vel orci laoreet commodo. Etiam tincidunt mauris tincidunt convallis vulputate. Integer odio dolor, varius a nulla venenatis, tristique auctor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis tortor ac tellus interdum condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean libero justo, tempus eget sem a, tempus imperdiet justo. Aenean sit amet tincidunt ex. Etiam bibendum tincidunt ligula, ac tincidunt erat. Nunc id aliquam eros, in scelerisque nunc. Pellentesque at mi libero. Donec eleifend faucibus nulla sodales consectetur.",
    //     link: "https://example.com",
    //   },
    //   {
    //     title:
    //       "What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum odio id mi elementum, sit amet maximus lorem cursus. Fusce maximus diam a tincidunt pharetra. Morbi nec nisi leo. Vestibulum tincidunt accumsan commodo. Nunc tincidunt quam interdum venenatis vestibulum. Quisque nec sapien elementum erat pulvinar ornare. Phasellus rutrum ultricies felis et rhoncus. Fusce tempor sapien non sapien hendrerit, non pulvinar nulla dapibus. Donec eleifend luctus urna, ac consequat dui tempor a.\nNulla eget dictum dui. Duis lorem lorem, egestas et ullamcorper quis, tincidunt vitae lorem. In hac habitasse platea dictumst. Praesent finibus nec ligula in fringilla. Duis at placerat lorem, vel molestie libero. Proin vehicula elit arcu, at maximus enim maximus eget. Praesent interdum ultrices nisi venenatis dictum.\nQuisque vestibulum odio eget rutrum rhoncus. Integer sodales sit amet lectus id scelerisque. Vivamus viverra lobortis semper. Vivamus viverra suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor rutrum euismod. Phasellus sollicitudin maximus nunc, in molestie tortor consectetur ut. Maecenas quis odio facilisis, pulvinar elit nec, consectetur metus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mattis dignissim rutrum. Integer et tincidunt dui. Pellentesque rhoncus eros quis feugiat rhoncus. Nam consectetur mi et enim ultricies vulputate. Maecenas imperdiet, turpis ac tempus tincidunt, nisl enim ornare odio, nec fringilla nulla ante nec ipsum. Curabitur nec libero nec nisi commodo lobortis eget sit amet neque. Curabitur eu tincidunt lectus.\nNullam pulvinar posuere lobortis. Duis nec congue sem. Curabitur laoreet venenatis diam, eget dignissim lectus luctus nec. Pellentesque malesuada enim vel orci laoreet commodo. Etiam tincidunt mauris tincidunt convallis vulputate. Integer odio dolor, varius a nulla venenatis, tristique auctor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis tortor ac tellus interdum condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean libero justo, tempus eget sem a, tempus imperdiet justo. Aenean sit amet tincidunt ex. Etiam bibendum tincidunt ligula, ac tincidunt erat. Nunc id aliquam eros, in scelerisque nunc. Pellentesque at mi libero. Donec eleifend faucibus nulla sodales consectetur.",
    //     link: "https://example.com",
    //   },
    //   {
    //     title:
    //       "What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum odio id mi elementum, sit amet maximus lorem cursus. Fusce maximus diam a tincidunt pharetra. Morbi nec nisi leo. Vestibulum tincidunt accumsan commodo. Nunc tincidunt quam interdum venenatis vestibulum. Quisque nec sapien elementum erat pulvinar ornare. Phasellus rutrum ultricies felis et rhoncus. Fusce tempor sapien non sapien hendrerit, non pulvinar nulla dapibus. Donec eleifend luctus urna, ac consequat dui tempor a.\nNulla eget dictum dui. Duis lorem lorem, egestas et ullamcorper quis, tincidunt vitae lorem. In hac habitasse platea dictumst. Praesent finibus nec ligula in fringilla. Duis at placerat lorem, vel molestie libero. Proin vehicula elit arcu, at maximus enim maximus eget. Praesent interdum ultrices nisi venenatis dictum.\nQuisque vestibulum odio eget rutrum rhoncus. Integer sodales sit amet lectus id scelerisque. Vivamus viverra lobortis semper. Vivamus viverra suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor rutrum euismod. Phasellus sollicitudin maximus nunc, in molestie tortor consectetur ut. Maecenas quis odio facilisis, pulvinar elit nec, consectetur metus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mattis dignissim rutrum. Integer et tincidunt dui. Pellentesque rhoncus eros quis feugiat rhoncus. Nam consectetur mi et enim ultricies vulputate. Maecenas imperdiet, turpis ac tempus tincidunt, nisl enim ornare odio, nec fringilla nulla ante nec ipsum. Curabitur nec libero nec nisi commodo lobortis eget sit amet neque. Curabitur eu tincidunt lectus.\nNullam pulvinar posuere lobortis. Duis nec congue sem. Curabitur laoreet venenatis diam, eget dignissim lectus luctus nec. Pellentesque malesuada enim vel orci laoreet commodo. Etiam tincidunt mauris tincidunt convallis vulputate. Integer odio dolor, varius a nulla venenatis, tristique auctor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis tortor ac tellus interdum condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean libero justo, tempus eget sem a, tempus imperdiet justo. Aenean sit amet tincidunt ex. Etiam bibendum tincidunt ligula, ac tincidunt erat. Nunc id aliquam eros, in scelerisque nunc. Pellentesque at mi libero. Donec eleifend faucibus nulla sodales consectetur.",
    //     link: "https://example.com",
    //   },
    //   {
    //     title:
    //       "What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum odio id mi elementum, sit amet maximus lorem cursus. Fusce maximus diam a tincidunt pharetra. Morbi nec nisi leo. Vestibulum tincidunt accumsan commodo. Nunc tincidunt quam interdum venenatis vestibulum. Quisque nec sapien elementum erat pulvinar ornare. Phasellus rutrum ultricies felis et rhoncus. Fusce tempor sapien non sapien hendrerit, non pulvinar nulla dapibus. Donec eleifend luctus urna, ac consequat dui tempor a.\nNulla eget dictum dui. Duis lorem lorem, egestas et ullamcorper quis, tincidunt vitae lorem. In hac habitasse platea dictumst. Praesent finibus nec ligula in fringilla. Duis at placerat lorem, vel molestie libero. Proin vehicula elit arcu, at maximus enim maximus eget. Praesent interdum ultrices nisi venenatis dictum.\nQuisque vestibulum odio eget rutrum rhoncus. Integer sodales sit amet lectus id scelerisque. Vivamus viverra lobortis semper. Vivamus viverra suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor rutrum euismod. Phasellus sollicitudin maximus nunc, in molestie tortor consectetur ut. Maecenas quis odio facilisis, pulvinar elit nec, consectetur metus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mattis dignissim rutrum. Integer et tincidunt dui. Pellentesque rhoncus eros quis feugiat rhoncus. Nam consectetur mi et enim ultricies vulputate. Maecenas imperdiet, turpis ac tempus tincidunt, nisl enim ornare odio, nec fringilla nulla ante nec ipsum. Curabitur nec libero nec nisi commodo lobortis eget sit amet neque. Curabitur eu tincidunt lectus.\nNullam pulvinar posuere lobortis. Duis nec congue sem. Curabitur laoreet venenatis diam, eget dignissim lectus luctus nec. Pellentesque malesuada enim vel orci laoreet commodo. Etiam tincidunt mauris tincidunt convallis vulputate. Integer odio dolor, varius a nulla venenatis, tristique auctor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis tortor ac tellus interdum condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean libero justo, tempus eget sem a, tempus imperdiet justo. Aenean sit amet tincidunt ex. Etiam bibendum tincidunt ligula, ac tincidunt erat. Nunc id aliquam eros, in scelerisque nunc. Pellentesque at mi libero. Donec eleifend faucibus nulla sodales consectetur.",
    //     link: "https://example.com",
    //   },
    // ],
    // [
    //   {
    //     title:
    //       "What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum odio id mi elementum, sit amet maximus lorem cursus. Fusce maximus diam a tincidunt pharetra. Morbi nec nisi leo. Vestibulum tincidunt accumsan commodo. Nunc tincidunt quam interdum venenatis vestibulum. Quisque nec sapien elementum erat pulvinar ornare. Phasellus rutrum ultricies felis et rhoncus. Fusce tempor sapien non sapien hendrerit, non pulvinar nulla dapibus. Donec eleifend luctus urna, ac consequat dui tempor a.\nNulla eget dictum dui. Duis lorem lorem, egestas et ullamcorper quis, tincidunt vitae lorem. In hac habitasse platea dictumst. Praesent finibus nec ligula in fringilla. Duis at placerat lorem, vel molestie libero. Proin vehicula elit arcu, at maximus enim maximus eget. Praesent interdum ultrices nisi venenatis dictum.\nQuisque vestibulum odio eget rutrum rhoncus. Integer sodales sit amet lectus id scelerisque. Vivamus viverra lobortis semper. Vivamus viverra suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor rutrum euismod. Phasellus sollicitudin maximus nunc, in molestie tortor consectetur ut. Maecenas quis odio facilisis, pulvinar elit nec, consectetur metus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mattis dignissim rutrum. Integer et tincidunt dui. Pellentesque rhoncus eros quis feugiat rhoncus. Nam consectetur mi et enim ultricies vulputate. Maecenas imperdiet, turpis ac tempus tincidunt, nisl enim ornare odio, nec fringilla nulla ante nec ipsum. Curabitur nec libero nec nisi commodo lobortis eget sit amet neque. Curabitur eu tincidunt lectus.\nNullam pulvinar posuere lobortis. Duis nec congue sem. Curabitur laoreet venenatis diam, eget dignissim lectus luctus nec. Pellentesque malesuada enim vel orci laoreet commodo. Etiam tincidunt mauris tincidunt convallis vulputate. Integer odio dolor, varius a nulla venenatis, tristique auctor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis tortor ac tellus interdum condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean libero justo, tempus eget sem a, tempus imperdiet justo. Aenean sit amet tincidunt ex. Etiam bibendum tincidunt ligula, ac tincidunt erat. Nunc id aliquam eros, in scelerisque nunc. Pellentesque at mi libero. Donec eleifend faucibus nulla sodales consectetur.",
    //     link: "https://example.com",
    //   },
    //   {
    //     title:
    //       "What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum odio id mi elementum, sit amet maximus lorem cursus. Fusce maximus diam a tincidunt pharetra. Morbi nec nisi leo. Vestibulum tincidunt accumsan commodo. Nunc tincidunt quam interdum venenatis vestibulum. Quisque nec sapien elementum erat pulvinar ornare. Phasellus rutrum ultricies felis et rhoncus. Fusce tempor sapien non sapien hendrerit, non pulvinar nulla dapibus. Donec eleifend luctus urna, ac consequat dui tempor a.\nNulla eget dictum dui. Duis lorem lorem, egestas et ullamcorper quis, tincidunt vitae lorem. In hac habitasse platea dictumst. Praesent finibus nec ligula in fringilla. Duis at placerat lorem, vel molestie libero. Proin vehicula elit arcu, at maximus enim maximus eget. Praesent interdum ultrices nisi venenatis dictum.\nQuisque vestibulum odio eget rutrum rhoncus. Integer sodales sit amet lectus id scelerisque. Vivamus viverra lobortis semper. Vivamus viverra suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor rutrum euismod. Phasellus sollicitudin maximus nunc, in molestie tortor consectetur ut. Maecenas quis odio facilisis, pulvinar elit nec, consectetur metus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mattis dignissim rutrum. Integer et tincidunt dui. Pellentesque rhoncus eros quis feugiat rhoncus. Nam consectetur mi et enim ultricies vulputate. Maecenas imperdiet, turpis ac tempus tincidunt, nisl enim ornare odio, nec fringilla nulla ante nec ipsum. Curabitur nec libero nec nisi commodo lobortis eget sit amet neque. Curabitur eu tincidunt lectus.\nNullam pulvinar posuere lobortis. Duis nec congue sem. Curabitur laoreet venenatis diam, eget dignissim lectus luctus nec. Pellentesque malesuada enim vel orci laoreet commodo. Etiam tincidunt mauris tincidunt convallis vulputate. Integer odio dolor, varius a nulla venenatis, tristique auctor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis tortor ac tellus interdum condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean libero justo, tempus eget sem a, tempus imperdiet justo. Aenean sit amet tincidunt ex. Etiam bibendum tincidunt ligula, ac tincidunt erat. Nunc id aliquam eros, in scelerisque nunc. Pellentesque at mi libero. Donec eleifend faucibus nulla sodales consectetur.",
    //     link: "https://example.com",
    //   },
    //   {
    //     title:
    //       "What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum odio id mi elementum, sit amet maximus lorem cursus. Fusce maximus diam a tincidunt pharetra. Morbi nec nisi leo. Vestibulum tincidunt accumsan commodo. Nunc tincidunt quam interdum venenatis vestibulum. Quisque nec sapien elementum erat pulvinar ornare. Phasellus rutrum ultricies felis et rhoncus. Fusce tempor sapien non sapien hendrerit, non pulvinar nulla dapibus. Donec eleifend luctus urna, ac consequat dui tempor a.\nNulla eget dictum dui. Duis lorem lorem, egestas et ullamcorper quis, tincidunt vitae lorem. In hac habitasse platea dictumst. Praesent finibus nec ligula in fringilla. Duis at placerat lorem, vel molestie libero. Proin vehicula elit arcu, at maximus enim maximus eget. Praesent interdum ultrices nisi venenatis dictum.\nQuisque vestibulum odio eget rutrum rhoncus. Integer sodales sit amet lectus id scelerisque. Vivamus viverra lobortis semper. Vivamus viverra suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor rutrum euismod. Phasellus sollicitudin maximus nunc, in molestie tortor consectetur ut. Maecenas quis odio facilisis, pulvinar elit nec, consectetur metus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mattis dignissim rutrum. Integer et tincidunt dui. Pellentesque rhoncus eros quis feugiat rhoncus. Nam consectetur mi et enim ultricies vulputate. Maecenas imperdiet, turpis ac tempus tincidunt, nisl enim ornare odio, nec fringilla nulla ante nec ipsum. Curabitur nec libero nec nisi commodo lobortis eget sit amet neque. Curabitur eu tincidunt lectus.\nNullam pulvinar posuere lobortis. Duis nec congue sem. Curabitur laoreet venenatis diam, eget dignissim lectus luctus nec. Pellentesque malesuada enim vel orci laoreet commodo. Etiam tincidunt mauris tincidunt convallis vulputate. Integer odio dolor, varius a nulla venenatis, tristique auctor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis tortor ac tellus interdum condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean libero justo, tempus eget sem a, tempus imperdiet justo. Aenean sit amet tincidunt ex. Etiam bibendum tincidunt ligula, ac tincidunt erat. Nunc id aliquam eros, in scelerisque nunc. Pellentesque at mi libero. Donec eleifend faucibus nulla sodales consectetur.",
    //     link: "https://example.com",
    //   },
    //   {
    //     title:
    //       "What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long What happens if the title is extremely long",
    //     content:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum odio id mi elementum, sit amet maximus lorem cursus. Fusce maximus diam a tincidunt pharetra. Morbi nec nisi leo. Vestibulum tincidunt accumsan commodo. Nunc tincidunt quam interdum venenatis vestibulum. Quisque nec sapien elementum erat pulvinar ornare. Phasellus rutrum ultricies felis et rhoncus. Fusce tempor sapien non sapien hendrerit, non pulvinar nulla dapibus. Donec eleifend luctus urna, ac consequat dui tempor a.\nNulla eget dictum dui. Duis lorem lorem, egestas et ullamcorper quis, tincidunt vitae lorem. In hac habitasse platea dictumst. Praesent finibus nec ligula in fringilla. Duis at placerat lorem, vel molestie libero. Proin vehicula elit arcu, at maximus enim maximus eget. Praesent interdum ultrices nisi venenatis dictum.\nQuisque vestibulum odio eget rutrum rhoncus. Integer sodales sit amet lectus id scelerisque. Vivamus viverra lobortis semper. Vivamus viverra suscipit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam porttitor rutrum euismod. Phasellus sollicitudin maximus nunc, in molestie tortor consectetur ut. Maecenas quis odio facilisis, pulvinar elit nec, consectetur metus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mattis dignissim rutrum. Integer et tincidunt dui. Pellentesque rhoncus eros quis feugiat rhoncus. Nam consectetur mi et enim ultricies vulputate. Maecenas imperdiet, turpis ac tempus tincidunt, nisl enim ornare odio, nec fringilla nulla ante nec ipsum. Curabitur nec libero nec nisi commodo lobortis eget sit amet neque. Curabitur eu tincidunt lectus.\nNullam pulvinar posuere lobortis. Duis nec congue sem. Curabitur laoreet venenatis diam, eget dignissim lectus luctus nec. Pellentesque malesuada enim vel orci laoreet commodo. Etiam tincidunt mauris tincidunt convallis vulputate. Integer odio dolor, varius a nulla venenatis, tristique auctor tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis tortor ac tellus interdum condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean libero justo, tempus eget sem a, tempus imperdiet justo. Aenean sit amet tincidunt ex. Etiam bibendum tincidunt ligula, ac tincidunt erat. Nunc id aliquam eros, in scelerisque nunc. Pellentesque at mi libero. Donec eleifend faucibus nulla sodales consectetur.",
    //     link: "https://example.com",
    //   },
    // ],
  ]);

  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    const url =
      "https://edition.cnn.com/2025/02/01/politics/mexico-canada-china-tariffs-trump/index.html";
    const endpoint = `http://localhost:5000/api/start?${new URLSearchParams({
      url,
    })}`;

    fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const nodes = data.nodes;

        setScrolls(() => {
          return [
            nodes.map((node) => ({
              title: node.title,
              content: node.content,
              link: node.url,
            })),
          ];
        });

        setScrollAmounts(() => {
          return [0];
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const finalScrollAmount = useMemo(
    () => scrollAmounts[currentScroll],
    [scrollAmounts, currentScroll]
  );

  const finalCards = useMemo(
    () => scrolls[currentScroll],
    [scrolls, currentScroll]
  );

  const atTop = useMemo(() => finalScrollAmount === 0, [finalScrollAmount]);

  const atBottom = useMemo(
    () => finalScrollAmount === finalCards.length - 1,
    [finalScrollAmount, finalCards]
  );

  const atStart = useMemo(() => currentScroll === 0, [currentScroll]);

  const [cached, setCached] = useState(false);

  const scrollUp = useCallback(() => {
    setScrollAmounts((prev) => {
      const next = [...prev];
      next[currentScroll] = Math.max(next[currentScroll] - 1, 0);
      next.splice(currentScroll + 1);
      return next;
    });
    if (currentScroll < scrolls.length - 1) {
      setScrolls((prev) => {
        const next = [...prev];
        next.splice(currentScroll + 1);
        return next;
      });
      setCached(false);
    }
  }, [currentScroll, scrolls.length]);

  const scrollDown = useCallback(() => {
    setScrollAmounts((prev) => {
      const next = [...prev];
      next[currentScroll] = Math.min(
        next[currentScroll] + 1,
        finalCards.length - 1
      );
      next.splice(currentScroll + 1);
      return next;
    });
    if (currentScroll < scrolls.length - 1) {
      setScrolls((prev) => {
        const next = [...prev];
        next.splice(currentScroll + 1);
        return next;
      });
      setCached(false);
    }
  }, [currentScroll, finalCards.length, scrolls.length]);

  const scrollLeft = useCallback(() => {
    setCurrentScroll((prev) => Math.max(prev - 1, 0));
    setCached(true);
  }, []);

  const scrollRight = useCallback(
    async (url: string) => {
      if (cached) {
        setCurrentScroll((prev) => prev + 1);
        return;
      }
      console.log("SCROLLRIGHT");
      const encodedUrl = encodeURIComponent(url);
      const endpoint = `http://localhost:5000/api/prevents?url=${encodedUrl}`;

      try {
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        console.log(data);

        const nodes = data.nodes;

        setScrolls((prev) => {
          const next = [...prev];
          next.push(
            nodes.map((node) => ({
              title: node.title,
              content: node.content,
              link: node.url,
            }))
          );
          return next;
        });

        setScrollAmounts((prev) => {
          const next = [...prev];
          next.push(0);
          return next;
        });

        setCurrentScroll((prev) => prev + 1);
      } catch (error) {
        console.error(error);
      }
    },
    [cached]
  );

  return (
    <div className="relative h-full">
      <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center gap-8">
        <div className="z-10 h-12">
          {!atTop && (
            <ScrollButton icon="keyboard_arrow_up" onClick={scrollUp} />
          )}
        </div>
        <div className="h-card"></div>
        <div className="z-10 h-12">
          {!atBottom && (
            <ScrollButton icon="keyboard_arrow_down" onClick={scrollDown} />
          )}
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center pr-64">
        <div className="z-10">
          {!atStart && (
            <ScrollButton icon="keyboard_arrow_left" onClick={scrollLeft} />
          )}
        </div>
        <div className="w-card"></div>
      </div>
      <div className="flex justify-center absolute top-0 w-full h-full">
        <div
          className="transition-transform duration-300 w-card"
          style={{
            transform: `translateX(-${currentScroll * 60}rem)`,
          }}
        >
          {scrolls.map((cards, i) => (
            <div
              className="absolute top-0 h-full"
              style={{
                left: `${i * 60}rem`,
              }}
              key={i}
            >
              <Scroll scrollAmount={scrollAmounts[i]}>
                {cards.map((card, j) => (
                  <Flashcard card={card} key={j} scrollRight={scrollRight} />
                ))}
              </Scroll>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
