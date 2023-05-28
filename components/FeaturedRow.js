import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import {
    ArrowLongRightIcon,
} from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';
const FeaturedRow = ({ title, description }) => {
    return (
        <View className="">
            <View className="mt-4 px-4 flex-row items-center justify-between">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowLongRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-400 px-4">{description}</Text>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Palla,Delhi-110036"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Palla,Delhi-110036"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Palla,Delhi-110036"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Palla,Delhi-110036"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Palla,Delhi-110036"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Palla,Delhi-110036"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Palla,Delhi-110036"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Palla,Delhi-110036"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="Palla,Delhi-110036"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>


    )
}

export default FeaturedRow