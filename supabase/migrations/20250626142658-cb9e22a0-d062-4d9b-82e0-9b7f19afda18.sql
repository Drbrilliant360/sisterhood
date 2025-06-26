
-- Add missing columns to the profiles table
ALTER TABLE public.profiles 
ADD COLUMN bio text,
ADD COLUMN location text,
ADD COLUMN phone text,
ADD COLUMN interests text;
