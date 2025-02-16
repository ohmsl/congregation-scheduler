import { UserIcon } from "lucide-react-native";
import React from "react";
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  variant?: "circular" | "rounded" | "square";
  backgroundColor?: string;
  color?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 40,
  variant = "circular",
  backgroundColor = "#888",
  color = "#fff",
  style,
  children,
}) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const containerStyle: ViewStyle = {
    width: size,
    height: size,
    backgroundColor,
    borderRadius:
      variant === "circular" ? size / 2 : variant === "rounded" ? 4 : 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    ...style,
  };

  const imageStyle: ImageStyle = {
    width: "100%",
    height: "100%",
  };

  const textStyle: TextStyle = {
    color,
    fontSize: size * 0.4,
    fontWeight: "500",
  };

  const renderContent = () => {
    if (src) {
      return (
        <Image source={{ uri: src }} style={imageStyle} resizeMode="cover" />
      );
    }

    if (children) {
      return children;
    }

    if (alt) {
      return <Text style={textStyle}>{getInitials(alt)}</Text>;
    }

    return <UserIcon size={size * 0.6} color={color} />;
  };

  return <View style={containerStyle}>{renderContent()}</View>;
};

export default Avatar;
