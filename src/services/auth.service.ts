import { API_URL } from '@/config';
import { ENDPOINTS } from '@/constants';
import HttpService from '@/libs/axios';

const httpService = new HttpService(API_URL);

export const authService = {
  async loginByEmail(payload: EmailLoginRequest) {
    return await httpService.post(ENDPOINTS.emailLogin, payload);
  },

  async loginByPhone(payload: PhoneLoginRequest) {
    return await httpService.post(ENDPOINTS.phoneLogin, payload);
  },

  async loginByGoogle(payload: ThirdPartyLoginRequest) {
    return await httpService.post(ENDPOINTS.googleLogin, payload);
  },

  async loginByFacebook(payload: ThirdPartyLoginRequest) {
    return await httpService.post(ENDPOINTS.facebookLogin, payload);
  },

  async loginByApple(payload: ThirdPartyLoginRequest) {
    return await httpService.post(ENDPOINTS.appleLogin, payload);
  },

  async verifyEmail(payload: EmailVerificationCodeValidationRequest) {
    return await httpService.post(ENDPOINTS.emailVerification, payload);
  },

  async verifyPhone(payload: PhoneVerificationCodeValidationRequest) {
    return await httpService.post(ENDPOINTS.phoneVerification, payload);
  },

  async sendEmailVerificationCode(payload: EmailVerificationRequest) {
    return await httpService.post(ENDPOINTS.sendEmailVerificationCode, payload);
  },

  async sendPhoneVerificationCode(payload: PhoneVerificationRequest) {
    return await httpService.post(ENDPOINTS.sendPhoneVerificationCode, payload);
  },

  async signupByEmail(payload: EmailSignupRequest) {
    return await httpService.post(ENDPOINTS.emailSignup, payload);
  },

  async signupByPhone(payload: PhoneSignupRequest) {
    return await httpService.post(ENDPOINTS.phoneSignup, payload);
  },

  async sendPasswordRecoveryEmailCode(payload: EmailForgotPasswordVerificationRequest) {
    return await httpService.post(ENDPOINTS.sendPasswordRecoveryEmailCode, payload);
  },

  async sendPasswordRecoveryPhoneCode(payload: PhoneForgotPasswordVerificationRequest) {
    return await httpService.post(ENDPOINTS.sendPasswordRecoveryPhoneCode, payload);
  },

  async verifyPasswordRecoveryEmailCode(payload: EmailForgotPasswordVerificationValidationRequest) {
    return await httpService.put(ENDPOINTS.emailForgotPasswordVerification, payload);
  },

  async verifyPasswordRecoveryPhoneCode(payload: PhoneForgotPasswordVerificationValidationRequest) {
    return await httpService.put(ENDPOINTS.phoneForgotPasswordVerification, payload);
  },

  async recoverPassword(payload: RecoverPasswordRequest) {
    return await httpService.put(ENDPOINTS.recoverPassword, payload);
  },

  async changePassword(payload: PasswordModificationRequest) {
    return await httpService.put(ENDPOINTS.changePassword, payload);
  },
};
