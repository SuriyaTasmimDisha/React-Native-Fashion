import React, {useRef} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Slider from '../../components/Slider';
import styles from './styles';
import Animated, {
  interpolateColor,
  multiply,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import SubSlide from '../../components/SubSlide';

const {width} = Dimensions.get('window');

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here! ",
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore hundreads of outfit ideas.',
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your way',
    description:
      'Create your individual and unique style and look amazing everyday.',
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discover the latest trends in fashion and explore your personality.',
  },
];

const OnboardingScreen = () => {
  const horizontalValue = useSharedValue(0);

  const scroll = useRef<any>(null);

  const scrollHandler = useAnimatedScrollHandler(event => {
    horizontalValue.value = event.contentOffset.x;
  });

  const sliderStyle = useAnimatedStyle<any>(() => {
    const backgroundColor = interpolateColor(
      horizontalValue.value,
      slides.map((_, i) => i * width),
      slides.map(slide => slide.color),
    );

    return {backgroundColor};
  });

  const transformStyle = useAnimatedStyle<any>(() => {
    const transform = [{translateX: -horizontalValue.value}];
    const borderTopLeftRadius = 75;
    // return {transform: [{translateX: -horizontalValue.value}]};
    return {transform, borderTopLeftRadius}
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, sliderStyle]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          bounces={false}
          scrollEventThrottle={1}
          onScroll={scrollHandler}>
          {slides.map((slide, index) => (
            <Slider label={slide.title} right={!!(index % 2)} key={index} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[{...StyleSheet.absoluteFillObject}, sliderStyle]}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
            },
            transformStyle,
          ]}>
          {slides.map((slide, index) => (
            <SubSlide
              subtitle={slide.subtitle}
              description={slide.description}
              last={index === slides.length - 1}
              key={index}
              onPress={() => {
                if (scroll.current) {
                  scroll.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
