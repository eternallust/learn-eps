import { useFocusEffect, useRouter } from "expo-router";
import { Lock, LockKeyhole, Mail } from "lucide-react-native";
import { Image } from "expo-image";
import React, { useCallback, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AvoidSoftInput,
  AvoidSoftInputView,
} from "react-native-avoid-softinput";

import { styles } from "./styles";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useFocusEffect(
    useCallback(() => {
      AvoidSoftInput.setEnabled(true);
      AvoidSoftInput.setShowAnimationDelay(0);
      AvoidSoftInput.setHideAnimationDelay(0);
      return () => {
        AvoidSoftInput.setEnabled(false);
      };
    }, []),
  );

  const goHome = () => {
    router.replace("/homescreen");
  };

  return (
    <AvoidSoftInputView style={styles.root} enabled>
      <ScrollView
        style={styles.scroll}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Image source={require("../../assets/images/logo.png")} style={styles.image} contentFit="contain" />
        <Image source={require("../../assets/images/login.png")} style={styles.loginImage} contentFit="contain" />

        <Text style={styles.title}>Selamat Datang di Seori</Text>
        <Text style={styles.subtitle}>Wujudkan mimpi kerja di Korea dengan persiapan yang tepat.</Text>
        <>
          <View style={styles.inputRow}>
            <Mail
              size={22}
              color="#9CA3AF"
              strokeWidth={2}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputRow}>
            <LockKeyhole
              size={22}
              color="#9CA3AF"
              strokeWidth={2}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Pressable onPress={() => {}} hitSlop={8}>
              <Text style={styles.forgotText}>Lupa Kata Sandi?</Text>
            </Pressable>
          </View>
        </>
        <Pressable
          style={({ pressed }) => [
            styles.primaryBtn,
            pressed && styles.primaryBtnPressed,
          ]}
          onPress={goHome}
        >
          <Text style={styles.primaryBtnText}>Masuk</Text>
        </Pressable>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Atau</Text>
          <View style={styles.dividerLine} />
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.googleSignInBtn,
            pressed && styles.googleSignInBtnPressed,
          ]}
          onPress={goHome}
          accessibilityRole="button"
          accessibilityLabel="Masuk dengan Google"
        >
          <Image
            source={require("../../assets/images/google.svg")}
            style={styles.googleIcon}
            contentFit="contain"
            accessibilityIgnoresInvertColors
          />
          <Text style={styles.googleSignInText}>Masuk dengan Google</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Belum punya akun?{" "}
            <Text style={styles.footerLink} onPress={() => {}}>
              Daftar
            </Text>
          </Text>
        </View>
      </ScrollView>
    </AvoidSoftInputView>
  );
}
